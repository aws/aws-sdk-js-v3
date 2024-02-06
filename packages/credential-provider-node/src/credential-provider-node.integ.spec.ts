import { STS } from "@aws-sdk/client-sts";
import { HttpResponse } from "@smithy/protocol-http";
import type { SourceProfileInit } from "@smithy/shared-ini-file-loader";
import type { HttpRequest, NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { Readable } from "stream";

import { defaultProvider } from "./defaultProvider";

jest.mock("fs", () => {
  const actual = jest.requireActual("fs");
  return {
    ...actual,
    readFileSync(file: string, ...options: any[]) {
      if (file === "token-filepath") {
        return "token-contents";
      }
      return actual.readFileSync(file, ...options);
    },
  };
});

let iniProfileData: ParsedIniData = null as any;
jest.mock("@smithy/shared-ini-file-loader", () => {
  const actual = jest.requireActual("@smithy/shared-ini-file-loader");
  return {
    ...actual,
    async loadSsoSessionData() {
      return Object.entries(iniProfileData)
        .filter(([key]) => key.startsWith("sso-session."))
        .reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key.split("sso-session.")[1]]: value,
          }),
          {}
        );
    },
    async parseKnownFiles(init: SourceProfileInit): Promise<ParsedIniData> {
      return iniProfileData;
    },
    async getSSOTokenFromFile() {
      return {
        accessToken: "mock_sso_token",
        expiresAt: new Date("3000/1/1").toISOString(),
      };
    },
  };
});

jest.mock("@aws-sdk/client-sso", () => {
  const actual = jest.requireActual("@aws-sdk/client-sso");
  return {
    ...actual,
    SSOClient: class {
      async send() {
        return {
          roleCredentials: {
            accessKeyId: "SSO_ACCESS_KEY_ID",
            secretAccessKey: "SSO_SECRET_ACCESS_KEY",
            sessionToken: "SSO_SESSION_TOKEN",
            expiration: new Date("3000/1/1"),
            credentialScope: "us-sso-1",
          },
        };
      }
    },
  };
});

jest.mock("@aws-sdk/client-sts", () => {
  const actual = jest.requireActual("@aws-sdk/client-sts");
  return {
    ...actual,
    getDefaultRoleAssumer() {
      return async () => {
        return {
          accessKeyId: "STS_AR_ACCESS_KEY_ID",
          secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
          sessionToken: "STS_AR_SESSION_TOKEN",
          expiration: new Date("3000/1/1"),
          credentialScope: "us-stsar-1",
        };
      };
    },
    getDefaultRoleAssumerWithWebIdentity() {
      return async () => {
        return {
          accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
          secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
          sessionToken: "STS_ARWI_SESSION_TOKEN",
          expiration: new Date("3000/1/1"),
          credentialScope: "us-stsarwi-1",
        };
      };
    },
    STSClient: class {
      async send(command: any) {
        if (command.constructor.name === "AssumeRoleCommand") {
          return {
            Credentials: {
              AccessKeyId: "STS_AR_ACCESS_KEY_ID",
              SecretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
              SessionToken: "STS_AR_SESSION_TOKEN",
              Expiration: new Date("3000/1/1"),
              CredentialScope: "us-stsar-1",
            },
          };
        }
        if (command.constructor.name === "AssumeRoleWithWebIdentityCommand") {
          return {
            Credentials: {
              AccessKeyId: "STS_ARWI_ACCESS_KEY_ID",
              SecretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
              SessionToken: "STS_ARWI_SESSION_TOKEN",
              Expiration: new Date("3000/1/1"),
              CredentialScope: "us-stsarwi-1",
            },
          };
        }
      }
    },
  };
});

describe("credential-provider-node integration test", () => {
  let sts: STS = null as any;
  let processSnapshot: typeof process.env = null as any;

  const RESERVED_ENVIRONMENT_VARIABLES = {
    AWS_REGION: 1,
    AWS_PROFILE: 1,
    AWS_ACCESS_KEY_ID: 1,
    AWS_SECRET_ACCESS_KEY: 1,
    AWS_SESSION_TOKEN: 1,
    AWS_CREDENTIAL_EXPIRATION: 1,
    AWS_CREDENTIAL_SCOPE: 1,
    AWS_EC2_METADATA_DISABLED: 1,
  };

  function copy<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
  }

  const mockRequestHandler = new (class {
    async handle(request: HttpRequest, ignored?: any) {
      const body = new Readable();
      body.push(`
<GetCallerIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<GetCallerIdentityResult>
<Arn>arn:aws:iam::123456789012:user/Alice</Arn>
<UserId>AIDACKCEVSQ6C2EXAMPLE</UserId>
<Account>123456789012</Account>
</GetCallerIdentityResult>
<ResponseMetadata>
<RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</GetCallerIdentityResponse>
`);
      body.push(null);
      return {
        response: new HttpResponse({
          statusCode: 200,
          headers: {},
          body,
        }),
      };
    }
    updateHttpClientConfig(key: keyof NodeHttpHandlerOptions, value: NodeHttpHandlerOptions[typeof key]): void {}
    httpHandlerConfigs(): NodeHttpHandlerOptions {
      return null as any;
    }
  })();

  beforeAll(async () => {
    processSnapshot = copy(process.env);
  });

  beforeEach(async () => {
    sts = new STS({
      requestHandler: mockRequestHandler,
    });
    for (const variable in RESERVED_ENVIRONMENT_VARIABLES) {
      delete process.env[variable];
    }
    iniProfileData = {
      default: {
        region: "us-west-2",
        output: "json",
      },
    };
  });

  afterEach(async () => {
    Object.assign(process.env, processSnapshot);
    iniProfileData = {
      default: {
        region: "us-west-2",
        output: "json",
      },
    };
  });

  afterAll(async () => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  describe("fromEnv", () => {
    it("should load static credentials from environment variables", async () => {
      process.env.AWS_ACCESS_KEY_ID = "ENV_ACCESS_KEY";
      process.env.AWS_SECRET_ACCESS_KEY = "ENV_SECRET_KEY";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "ENV_ACCESS_KEY",
        secretAccessKey: "ENV_SECRET_KEY",
      });
    });

    it("should optionally use session token, expiration, and credential scope", async () => {
      process.env.AWS_ACCESS_KEY_ID = "ENV_ACCESS_KEY";
      process.env.AWS_SECRET_ACCESS_KEY = "ENV_SECRET_KEY";
      process.env.AWS_SESSION_TOKEN = "ENV_SESSION_TOKEN";
      process.env.AWS_CREDENTIAL_EXPIRATION = "2000-01-01T00:00:00.000Z";
      process.env.AWS_CREDENTIAL_SCOPE = "us-env-1";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "ENV_ACCESS_KEY",
        secretAccessKey: "ENV_SECRET_KEY",
        expiration: new Date("2000-01-01T00:00:00.000Z"),
        sessionToken: "ENV_SESSION_TOKEN",
        credentialScope: "us-env-1",
      });
    });
  });

  describe("fromSSO", () => {
    it("should resolve SSO credentials if legacy SSO parameters are supplied directly", async () => {
      sts = new STS({
        credentials: defaultProvider({
          ssoStartUrl: "SSO_START_URL",
          ssoAccountId: "1234",
          ssoRegion: "us-sso-1",
          ssoRoleName: "sso-role",
        }),
        requestHandler: mockRequestHandler,
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "SSO_ACCESS_KEY_ID",
        secretAccessKey: "SSO_SECRET_ACCESS_KEY",
        sessionToken: "SSO_SESSION_TOKEN",
        expiration: new Date("3000/1/1"),
        credentialScope: "us-sso-1",
      });
    });
  });

  describe("fromIni", () => {
    it("should resolve static credentials if directly present in config profile", async () => {
      Object.assign(iniProfileData.default, {
        aws_access_key_id: "INI_STATIC_ACCESS_KEY",
        aws_secret_access_key: "INI_STATIC_SECRET_KEY",
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "INI_STATIC_ACCESS_KEY",
        secretAccessKey: "INI_STATIC_SECRET_KEY",
      });
    });

    it("should resolve assumeRole credentials", async () => {
      iniProfileData.assume = {
        region: "us-stsar-1",
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      Object.assign(iniProfileData.default, {
        region: "us-stsar-1",
        role_arn: "ROLE_ARN",
        role_session_name: "ROLE_SESSION_NAME",
        external_id: "EXTERNAL_ID",
        source_profile: "assume",
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN",
        expiration: new Date("3000/1/1"),
        credentialScope: "us-stsar-1",
      });
    });

    xit("should prefer static credentials over role assumption metadata only if the profile is not the first one visited", async () => {
      // TODO
    });

    it("should resolve credentials from STS assumeRoleWithWebIdentity if the ini profile is configured for web identity", async () => {
      Object.assign(iniProfileData.default, {
        web_identity_token_file: "token-filepath",
        role_arn: "ROLE_ARN",
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
        secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
        sessionToken: "STS_ARWI_SESSION_TOKEN",
        expiration: new Date("3000/1/1"),
        credentialScope: "us-stsarwi-1",
      });
    });

    xit("should resolve credentials from STS assumeRoleWithWebIdentity if the ini profile is configured for web identity and the client region is not the default AWS partition", async () => {
      // TODO
      // this is difficult to do when getDefaultRoleAssumerWithWebIdentity is mocked.
    });

    xit("should resolve process credentials if the profile is a process profile", async () => {
      // TODO
    });

    it("should resolve SSO credentials if the profile is an SSO profile", async () => {
      iniProfileData["sso-session.ssoNew"] = {
        sso_region: "us-sso-1",
        sso_start_url: "SSO_START_URL",
        sso_registration_scopes: "sso:account:access",
      };
      Object.assign(iniProfileData.default, {
        sso_region: "us-sso-1",
        sso_session: "ssoNew",
        sso_account_id: "1234",
        sso_role_name: "integration-test",
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "SSO_ACCESS_KEY_ID",
        secretAccessKey: "SSO_SECRET_ACCESS_KEY",
        sessionToken: "SSO_SESSION_TOKEN",
        expiration: new Date("3000/1/1"),
        credentialScope: "us-sso-1",
      });
    });
  });

  describe("fromProcess", () => {
    xit("should resolve process credentials if the profile is a process profile", async () => {
      // TODO
    });
  });

  describe("fromTokenFile", () => {
    xit("should resolve credentials with STS assumeRoleWithWebIdentity using a token", async () => {
      // TODO
    });
  });

  describe("remoteProvider", () => {
    xit("should use container metadata if AWS_CONTAINER_CREDENTIALS_FULL_URI is set", async () => {
      // TODO
    });

    xit("should use instance metadata unless IMDS is disabled", async () => {
      // TODO
    });
  });

  describe("No credentials available", () => {
    it("should throw CredentialsProviderError", async () => {
      process.env.AWS_EC2_METADATA_DISABLED = "true";
      expect(async () => sts.getCallerIdentity({})).rejects.toThrow("Could not load credentials from any providers");
    });
  });
});
