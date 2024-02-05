import { STS } from "@aws-sdk/client-sts";
import { HttpResponse } from "@smithy/protocol-http";
import type { SourceProfileInit } from "@smithy/shared-ini-file-loader";
import type { HttpRequest, NodeHttpHandlerOptions, ParsedIniData } from "@smithy/types";
import { Readable } from "stream";

let iniProfileData: ParsedIniData = null as any;
jest.mock("@smithy/shared-ini-file-loader", () => {
  const smithySharedIniFileLoader = jest.requireActual("@smithy/shared-ini-file-loader");
  return {
    ...smithySharedIniFileLoader,
    parseKnownFiles: async (init: SourceProfileInit): Promise<ParsedIniData> => {
      return iniProfileData;
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

  beforeAll(async () => {
    processSnapshot = copy(process.env);
  });

  beforeEach(async () => {
    sts = new STS({
      requestHandler: new (class {
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
      })(),
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
      // TODO
    });

    it("should optionally use session token, expiration, and credential scope", async () => {
      // TODO
    });
  });

  describe("fromSSO", () => {
    it("should resolve SSO credentials if the profile is an SSO profile", async () => {
      // TODO
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
      // TODO
    });

    it("should prefer static credentials over role assumption metadata only if the profile is not the first one visited", async () => {
      // TODO
    });

    it("should resolve credentials from STS assumeRoleWithWebIdentity if the ini profile is configured for web identity", async () => {
      // TODO
    });

    it("should resolve credentials from STS assumeRoleWithWebIdentity if the ini profile is configured for web identity and the client region is not the default AWS partition", async () => {
      // TODO
    });

    it("should resolve process credentials if the profile is a process profile", async () => {
      // TODO
    });

    it("should resolve SSO credentials if the profile is an SSO profile", async () => {
      // TODO
    });
  });

  describe("fromProcess", () => {
    it("should resolve process credentials if the profile is a process profile", async () => {
      // TODO
    });
  });

  describe("fromTokenFile", () => {
    it("should resolve credentials with STS assumeRoleWithWebIdentity using a token", async () => {
      // TODO
    });
  });

  describe("remoteProvider", () => {
    it("should use container metadata if AWS_CONTAINER_CREDENTIALS_FULL_URI is set", async () => {
      // TODO
    });

    it("should use instance metadata unless IMDS is disabled", async () => {
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
