import { STS } from "@aws-sdk/client-sts";
import * as credentialProviderHttp from "@aws-sdk/credential-provider-http";
import { fromIni } from "@aws-sdk/credential-providers";
import { HttpResponse } from "@smithy/protocol-http";
import type { SourceProfileInit } from "@smithy/shared-ini-file-loader";
import type { HttpRequest, NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { PassThrough } from "stream";

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
        expiresAt: "3000-01-01T00:00:00.000Z",
      };
    },
  };
});

const assumeRoleArns: string[] = [];

jest.mock("@smithy/node-http-handler", () => {
  const actual = jest.requireActual("@smithy/node-http-handler");

  class MockNodeHttpHandler {
    static create(instanceOrOptions?: any) {
      if (typeof instanceOrOptions?.handle === "function") {
        return instanceOrOptions;
      }
      return new MockNodeHttpHandler();
    }
    async handle(request: HttpRequest) {
      const body = new PassThrough({});

      if (request.body?.includes("RoleArn=")) {
        assumeRoleArns.push(request.body.match(/RoleArn=(.*?)&/)?.[1]);
      }

      const region = (request.hostname.match(/sts\.(.*?)\./) || [, "unknown"])[1];

      if (request.headers.Authorization === "container-authorization") {
        body.write(
          JSON.stringify({
            AccessKeyId: "CONTAINER_ACCESS_KEY",
            SecretAccessKey: "CONTAINER_SECRET_ACCESS_KEY",
            Token: "CONTAINER_TOKEN",
            Expiration: "3000-01-01T00:00:00.000Z",
          })
        );
      } else if (request.path?.includes("/federation/credentials")) {
        body.write(
          JSON.stringify({
            roleCredentials: {
              accessKeyId: "SSO_ACCESS_KEY_ID",
              secretAccessKey: "SSO_SECRET_ACCESS_KEY",
              sessionToken: "SSO_SESSION_TOKEN",
              expiration: "3000-01-01T00:00:00.000Z",
            },
          })
        );
      } else if (request.body?.includes("Action=AssumeRoleWithWebIdentity")) {
        body.write(`
<AssumeRoleWithWebIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleWithWebIdentityResult>
  <Credentials>
    <AccessKeyId>STS_ARWI_ACCESS_KEY_ID</AccessKeyId>
    <SecretAccessKey>STS_ARWI_SECRET_ACCESS_KEY</SecretAccessKey>
    <SessionToken>STS_ARWI_SESSION_TOKEN_${region}</SessionToken>
    <Expiration>3000-01-01T00:00:00.000Z</Expiration>
  </Credentials>
</AssumeRoleWithWebIdentityResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleWithWebIdentityResponse>`);
      } else if (request.body?.includes("Action=AssumeRole")) {
        body.write(`
<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<AssumeRoleResult>
  <Credentials>
    <AccessKeyId>STS_AR_ACCESS_KEY_ID</AccessKeyId>
    <SecretAccessKey>STS_AR_SECRET_ACCESS_KEY</SecretAccessKey>
    <SessionToken>STS_AR_SESSION_TOKEN_${region}</SessionToken>
    <Expiration>3000-01-01T00:00:00.000Z</Expiration>
  </Credentials>
</AssumeRoleResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</AssumeRoleResponse>`);
      } else if (request.body.includes("Action=GetCallerIdentity")) {
        body.write(`
<GetCallerIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
<GetCallerIdentityResult>
  <Arn>arn:aws:iam::123456789012:user/Alice</Arn>
  <UserId>AIDACKCEVSQ6C2EXAMPLE</UserId>
  <Account>123456789012</Account>
</GetCallerIdentityResult>
<ResponseMetadata>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ResponseMetadata>
</GetCallerIdentityResponse>`);
      } else {
        throw new Error("request not supported.");
      }
      body.end();
      return {
        response: new HttpResponse({
          statusCode: 200,
          body,
          headers: {},
        }),
      };
    }
    updateHttpClientConfig(key: keyof NodeHttpHandlerOptions, value: NodeHttpHandlerOptions[typeof key]): void {}
    httpHandlerConfigs(): NodeHttpHandlerOptions {
      return null as any;
    }
  }

  return {
    ...actual,
    NodeHttpHandler: MockNodeHttpHandler,
  };
});

jest.mock("child_process", () => {
  const actual = jest.requireActual("child_process");
  return {
    ...actual,
    exec(bin: string, cb: (err: unknown, data: any) => void, ...args: any[]) {
      if (bin === "credential-process") {
        return cb(null, {
          stdout: JSON.stringify({
            Version: 1,
            AccessKeyId: "PROCESS_ACCESS_KEY_ID",
            SecretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
            SessionToken: "PROCESS_SESSION_TOKEN",
          }),
        });
      }
      return actual.exec(bin, cb, ...args);
    },
  };
});

describe("credential-provider-node integration test", () => {
  let sts: STS = null as any;
  let processSnapshot: typeof process.env = null as any;

  const sink = {
    data: [] as string[],
    debug(log: string) {
      this.data.push(log);
    },
    info(log: string) {
      this.data.push(log);
    },
    warn(log: string) {
      this.data.push(log);
    },
    error(log: string) {
      this.data.push(log);
    },
  };

  const RESERVED_ENVIRONMENT_VARIABLES = {
    AWS_DEFAULT_REGION: 1,
    AWS_REGION: 1,
    AWS_PROFILE: 1,
    AWS_ACCESS_KEY_ID: 1,
    AWS_SECRET_ACCESS_KEY: 1,
    AWS_SESSION_TOKEN: 1,
    AWS_CREDENTIAL_EXPIRATION: 1,
    AWS_EC2_METADATA_DISABLED: 1,
    AWS_WEB_IDENTITY_TOKEN_FILE: 1,
    AWS_ROLE_ARN: 1,
    AWS_CONTAINER_CREDENTIALS_FULL_URI: 1,
    AWS_CONTAINER_CREDENTIALS_RELATIVE_URI: 1,
    AWS_CONTAINER_AUTHORIZATION_TOKEN: 1,
    AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE: 1,
  };

  function copy<T>(data: T): T {
    return JSON.parse(JSON.stringify(data));
  }

  beforeAll(async () => {
    processSnapshot = copy(process.env);
  });

  beforeEach(async () => {
    for (const variable in RESERVED_ENVIRONMENT_VARIABLES) {
      delete process.env[variable];
    }
    iniProfileData = {
      default: {
        region: "us-west-2",
        output: "json",
      },
    };
    sts = new STS({
      region: "us-west-2",
    });
  });

  afterEach(async () => {
    Object.assign(process.env, processSnapshot);
    iniProfileData = {
      default: {
        region: "us-west-2",
        output: "json",
      },
    };
    assumeRoleArns.length = 0;
    sink.data.length = 0;
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
        $source: {
          CREDENTIALS_ENV_VARS: "g",
        },
      });
    });

    it("should optionally use session token and/or expiration", async () => {
      process.env.AWS_ACCESS_KEY_ID = "ENV_ACCESS_KEY";
      process.env.AWS_SECRET_ACCESS_KEY = "ENV_SECRET_KEY";
      process.env.AWS_SESSION_TOKEN = "ENV_SESSION_TOKEN";
      process.env.AWS_CREDENTIAL_EXPIRATION = "2000-01-01T00:00:00.000Z";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "ENV_ACCESS_KEY",
        secretAccessKey: "ENV_SECRET_KEY",
        expiration: new Date("2000-01-01T00:00:00.000Z"),
        sessionToken: "ENV_SESSION_TOKEN",
        $source: {
          CREDENTIALS_ENV_VARS: "g",
        },
      });
    });

    it("should (for now) resolve AWS_PROFILE instead of static credentials from ENV if both are set. However, this is subject to change.", async () => {
      process.env.AWS_ACCESS_KEY_ID = "ENV_ACCESS_KEY";
      process.env.AWS_SECRET_ACCESS_KEY = "ENV_SECRET_KEY";
      process.env.AWS_PROFILE = "default";

      Object.assign(iniProfileData.default, {
        aws_access_key_id: "INI_STATIC_ACCESS_KEY",
        aws_secret_access_key: "INI_STATIC_SECRET_KEY",
      });

      sts = new STS({
        region: "us-west-2",
        logger: {
          trace() {},
          debug() {},
          info() {},
          warn() {},
          error() {},
        },
      });

      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();

      expect(credentials).toEqual({
        accessKeyId: "INI_STATIC_ACCESS_KEY",
        secretAccessKey: "INI_STATIC_SECRET_KEY",
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
      });
    });
  });

  describe("fromSSO", () => {
    it("should resolve SSO credentials if legacy SSO parameters are supplied directly", async () => {
      sts = new STS({
        // this is lower priority than the ssoRegion.
        region: "us-sso-region-2",
        credentials: defaultProvider({
          ssoStartUrl: "SSO_START_URL",
          ssoAccountId: "1234",
          ssoRegion: "us-sso-region-1",
          ssoRoleName: "sso-role",
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "SSO_ACCESS_KEY_ID",
        secretAccessKey: "SSO_SECRET_ACCESS_KEY",
        sessionToken: "SSO_SESSION_TOKEN",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_SSO_LEGACY: "u",
        },
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
        $source: {
          CREDENTIALS_PROFILE: "n",
        },
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
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("should use the outer client's region for STS when the partition is AWS", async () => {
      sts = new STS({
        region: "eu-west-1",
      });
      iniProfileData.assume = {
        region: "eu-west-1",
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      Object.assign(iniProfileData.default, {
        region: "eu-west-1",
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
        sessionToken: "STS_AR_SESSION_TOKEN_eu-west-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("should use the outer client's region for STS when the partition is not AWS", async () => {
      sts = new STS({
        region: "us-gov-stsar-1",
      });
      iniProfileData.assume = {
        region: "us-gov-stsar-1",
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      Object.assign(iniProfileData.default, {
        region: "us-gov-stsar-1",
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
        sessionToken: "STS_AR_SESSION_TOKEN_us-gov-stsar-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
    });

    it("should use the context client's region for STS even if initialized separately in a code-level provider", async () => {
      sts = new STS({
        region: "eu-west-1",
        credentials: fromIni(),
      });
      iniProfileData.assume = {
        region: "eu-west-1",
        aws_access_key_id: "ASSUME_STATIC_ACCESS_KEY",
        aws_secret_access_key: "ASSUME_STATIC_SECRET_KEY",
      };
      Object.assign(iniProfileData.default, {
        region: "eu-west-1",
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
        sessionToken: "STS_AR_SESSION_TOKEN_eu-west-1",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
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
        sessionToken: "STS_ARWI_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN: "q",
          CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
        },
      });
    });

    it(
      "should resolve credentials from STS assumeRoleWithWebIdentity if the ini profile is" +
        " configured for web identity and the client region is not the default AWS partition",
      async () => {
        sts = new STS({
          region: "us-gov-sts-1",
        });
        Object.assign(iniProfileData.default, {
          region: "us-gov-sts-1",
          web_identity_token_file: "token-filepath",
          role_arn: "ROLE_ARN",
        });
        await sts.getCallerIdentity({});
        const credentials = await sts.config.credentials();
        expect(credentials).toEqual({
          accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
          secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
          sessionToken: "STS_ARWI_SESSION_TOKEN_us-gov-sts-1",
          expiration: new Date("3000-01-01T00:00:00.000Z"),
          $source: {
            CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN: "q",
            CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
          },
        });
      }
    );

    it("should resolve process credentials if the profile is a process profile", async () => {
      Object.assign(iniProfileData.default, {
        credential_process: "credential-process",
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "PROCESS_ACCESS_KEY_ID",
        secretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
        sessionToken: "PROCESS_SESSION_TOKEN",
        $source: {
          CREDENTIALS_PROCESS: "w",
          CREDENTIALS_PROFILE_PROCESS: "v",
        },
      });
    });

    it("should resolve SSO credentials if the profile is an SSO profile", async () => {
      iniProfileData["sso-session.ssoNew"] = {
        sso_region: "us-sso-region-1",
        sso_start_url: "SSO_START_URL",
        sso_registration_scopes: "sso:account:access",
      };
      Object.assign(iniProfileData.default, {
        sso_region: "us-sso-region-1",
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
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_PROFILE_SSO: "r",
          CREDENTIALS_SSO: "s",
        },
      });
    });

    it("should be able to combine a source_profile having only credential_source with an origin profile having role_arn and source_profile", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";
      iniProfileData.default.source_profile = "credential_source_profile";
      iniProfileData.default.role_arn = "ROLE_ARN";
      iniProfileData.credential_source_profile = {
        credential_source: "EcsContainer",
      };
      const spy = jest.spyOn(credentialProviderHttp, "fromHttp");
      sts = new STS({
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
        })
      );
      expect(assumeRoleArns).toEqual(["ROLE_ARN"]);
      spy.mockClear();
    });

    it("should be able to combine a source_profile having web_identity_token_file and role_arn with an origin profile having role_arn and source_profile", async () => {
      iniProfileData.default.source_profile = "credential_source_profile";
      iniProfileData.default.role_arn = "ROLE_ARN_2";

      iniProfileData.credential_source_profile = {
        web_identity_token_file: "token-filepath",
        role_arn: "ROLE_ARN_1",
      };

      sts = new STS({
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(assumeRoleArns).toEqual(["ROLE_ARN_1", "ROLE_ARN_2"]);
    });

    it("should complete chained role_arn credentials", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";

      iniProfileData.default.source_profile = "credential_source_profile_1";
      iniProfileData.default.role_arn = "ROLE_ARN_3";

      iniProfileData.credential_source_profile_1 = {
        source_profile: "credential_source_profile_2",
        role_arn: "ROLE_ARN_2",
      };

      iniProfileData.credential_source_profile_2 = {
        credential_source: "EcsContainer",
        role_arn: "ROLE_ARN_1",
      };

      const spy = jest.spyOn(credentialProviderHttp, "fromHttp");
      sts = new STS({
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
        })
      );
      expect(assumeRoleArns).toEqual(["ROLE_ARN_1", "ROLE_ARN_2", "ROLE_ARN_3"]);
      spy.mockClear();
    });

    it("should complete chained role_arn credentials with optional role_arn in credential_source step", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";

      iniProfileData.default.source_profile = "credential_source_profile_1";
      iniProfileData.default.role_arn = "ROLE_ARN_3";

      iniProfileData.credential_source_profile_1 = {
        source_profile: "credential_source_profile_2",
        role_arn: "ROLE_ARN_2",
      };

      iniProfileData.credential_source_profile_2 = {
        credential_source: "EcsContainer",
        // This scenario tests the option of having no role_arn in this step of the chain.
      };

      const spy = jest.spyOn(credentialProviderHttp, "fromHttp");
      sts = new STS({
        region: "us-west-2",
        credentials: defaultProvider({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
          clientConfig: {
            region: "us-west-2",
          },
          logger: sink,
        }),
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_AR_ACCESS_KEY_ID",
        secretAccessKey: "STS_AR_SECRET_ACCESS_KEY",
        sessionToken: "STS_AR_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_CODE: "e",
          CREDENTIALS_PROFILE_SOURCE_PROFILE: "o",
          CREDENTIALS_STS_ASSUME_ROLE: "i",
        },
      });
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          awsContainerCredentialsFullUri: process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI,
          awsContainerAuthorizationToken: process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN,
        })
      );
      expect(assumeRoleArns).toEqual(["ROLE_ARN_2", "ROLE_ARN_3"]);
      spy.mockClear();
    });
  });

  describe("fromProcess", () => {
    it("should resolve process credentials if the profile is a process profile", async () => {
      // note: this is redundant with the resolveProcessCredentials portion of
      // credential-provider-ini. It's possible that this provider in the chain
      // is actually unreachable, because there is no separate ENV for the process
      // name. It requires a profile specifying the credential_process.
      Object.assign(iniProfileData.default, {
        credential_process: "credential-process",
      });
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "PROCESS_ACCESS_KEY_ID",
        secretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
        sessionToken: "PROCESS_SESSION_TOKEN",
        $source: {
          CREDENTIALS_PROCESS: "w",
          CREDENTIALS_PROFILE_PROCESS: "v",
        },
      });
    });
  });

  describe("fromTokenFile", () => {
    it("should resolve credentials with STS assumeRoleWithWebIdentity using a token", async () => {
      process.env.AWS_WEB_IDENTITY_TOKEN_FILE = "token-filepath";
      process.env.AWS_ROLE_ARN = "ROLE_ARN";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "STS_ARWI_ACCESS_KEY_ID",
        secretAccessKey: "STS_ARWI_SECRET_ACCESS_KEY",
        sessionToken: "STS_ARWI_SESSION_TOKEN_us-west-2",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN: "h",
          CREDENTIALS_STS_ASSUME_ROLE_WEB_ID: "k",
        },
      });
    });
  });

  describe("remoteProvider", () => {
    it("should use container metadata if AWS_CONTAINER_CREDENTIALS_FULL_URI is set", async () => {
      process.env.AWS_CONTAINER_CREDENTIALS_FULL_URI = "http://169.254.170.23";
      process.env.AWS_CONTAINER_AUTHORIZATION_TOKEN = "container-authorization";
      await sts.getCallerIdentity({});
      const credentials = await sts.config.credentials();
      expect(credentials).toEqual({
        accessKeyId: "CONTAINER_ACCESS_KEY",
        secretAccessKey: "CONTAINER_SECRET_ACCESS_KEY",
        sessionToken: "CONTAINER_TOKEN",
        expiration: new Date("3000-01-01T00:00:00.000Z"),
        $source: {
          CREDENTIALS_HTTP: "z",
        },
      });
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
