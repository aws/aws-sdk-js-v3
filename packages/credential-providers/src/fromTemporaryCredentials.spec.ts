import { AssumeRoleCommand, STSClient } from "@aws-sdk/nested-clients/sts";
import { LoadedConfigSelectors } from "@smithy/node-config-provider";
import type { ParsedIniData } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromTemporaryCredentials as fromTemporaryCredentialsNode } from "./fromTemporaryCredentials";
import { fromTemporaryCredentials } from "./fromTemporaryCredentials.base";

const mockSend = vi.fn();
const mockUsePlugin = vi.fn();

vi.mock("@aws-sdk/nested-clients/sts", () => ({
  STSClient: vi.fn().mockImplementation((config) => ({
    config,
    send: vi.fn().mockImplementation(async function (command) {
      // Mock resolving client credentials provider at send()
      if (typeof config.credentials === "function") {
        config.credentials = await config.credentials();
      }
      return mockSend(command);
    }),
    middlewareStack: { use: mockUsePlugin },
  })),
  AssumeRoleCommand: vi.fn().mockImplementation(function (params) {
    // Return the input so we can assert the input parameters in client's send()
    return {
      input: params,
      command: "ASSUME_ROLE",
    };
  }),
}));

let iniProfileData: ParsedIniData = null as any;
vi.mock(import("@smithy/node-config-provider"), async (importOriginal) => {
  return {
    ...(await importOriginal()),
    loadConfig: ((
      { environmentVariableSelector, configFileSelector, default: defaultValue }: LoadedConfigSelectors<any>,
      { profile = process.env.AWS_PROFILE ?? "default" }: { profile?: string }
    ) => {
      return () =>
        environmentVariableSelector(process.env) ?? configFileSelector(iniProfileData[profile] ?? {}) ?? defaultValue();
    }) as any,
  };
});

describe("fromTemporaryCredentials", () => {
  const RoleArn = "ROLE_ARN";
  const RoleSessionName = "ROLE_SESSION_NAME";
  const masterCredentials = {
    accessKeyId: "ACCESS_KEY_ID",
    secretAccessKey: "SECRET_ACCESS_KEY",
  };
  const region = "US_BAR_1";
  let processSnapshot: Record<string, any>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockSend.mockResolvedValue({
      Credentials: {
        AccessKeyId: "ACCESS_KEY_ID",
        SecretAccessKey: "SECRET_ACCESS_KEY",
        SessionToken: "SESSION_TOKEN",
      },
    });

    processSnapshot = {
      ...process.env,
    };
    process.env = {};

    iniProfileData = {
      default: {
        region: "us-west-2",
      },
    };
  });

  afterEach(() => {
    process.env = processSnapshot;
  });

  it("should call STS::AssumeRole API with master credentials", async () => {
    const plugin = { applyToStack: () => {} };
    const options = {
      params: {
        RoleArn,
        RoleSessionName,
      },
      masterCredentials,
      clientConfig: { region },
      clientPlugins: [plugin],
    };
    const provider = fromTemporaryCredentialsNode(options);
    const credential = await provider();
    expect(credential).toEqual({
      accessKeyId: "ACCESS_KEY_ID",
      secretAccessKey: "SECRET_ACCESS_KEY",
      sessionToken: "SESSION_TOKEN",
    });
    expect(vi.mocked(STSClient as any)).toHaveBeenCalledWith({
      credentials: masterCredentials,
      region,
    });
    expect(mockUsePlugin).toHaveBeenCalledTimes(1);
    expect(mockUsePlugin).toHaveBeenNthCalledWith(1, plugin);
    expect(AssumeRoleCommand as unknown as any).toHaveBeenCalledWith({
      RoleArn,
      RoleSessionName,
    });
    expect(vi.mocked(mockSend)).toHaveBeenCalledWith({ command: "ASSUME_ROLE", input: options.params });
  });

  it("should create STS client if not supplied", async () => {
    const plugin = { applyToStack: () => {} };
    const provider = fromTemporaryCredentialsNode({
      params: {
        RoleArn,
        RoleSessionName,
      },
      masterCredentials,
      clientPlugins: [plugin],
    });
    await provider();
    expect(vi.mocked(STSClient as any)).toHaveBeenCalledWith({
      credentials: masterCredentials,
      logger: void 0,
      profile: void 0,
      region: "us-west-2", // profile default
      requestHandler: void 0,
    });
    expect(mockUsePlugin).toHaveBeenCalledTimes(1);
    expect(mockUsePlugin).toHaveBeenNthCalledWith(1, plugin);
  });

  it("should create a role session name if none provided", async () => {
    const provider = fromTemporaryCredentialsNode({
      params: { RoleArn },
      masterCredentials,
    });
    await provider();
    expect(AssumeRoleCommand as unknown as any).toHaveBeenCalledWith({
      RoleArn,
      RoleSessionName: expect.stringMatching(/^aws-sdk-js-/),
    });
  });

  describe("nested sts credential resolution order", () => {
    const masterCredentials = vi.fn();
    const clientConfigCredentials = vi.fn();
    const callerClientCredentials = vi.fn();
    const callerClientCredentialsProvider = () => callerClientCredentials;
    const chainCredentials = vi.fn();
    const chainCredentialsProvider = () => chainCredentials;

    it("should use with 1st priority masterCredentials from the provider", async () => {
      const provider = fromTemporaryCredentials(
        {
          params: { RoleArn },
          masterCredentials: masterCredentials,
          clientConfig: {
            credentials: clientConfigCredentials,
          },
        },
        chainCredentialsProvider
      );
      await provider({
        callerClientConfig: {
          region: async () => "us-west-2",
          credentialDefaultProvider: callerClientCredentialsProvider,
        },
      });
      expect(masterCredentials).toHaveBeenCalled();
      expect(clientConfigCredentials).not.toHaveBeenCalled();
      expect(callerClientCredentials).not.toHaveBeenCalled();
      expect(chainCredentials).not.toHaveBeenCalled();
    });
    it("should use with 2nd priority options.clientConfig.credentials", async () => {
      const provider = fromTemporaryCredentials(
        {
          params: { RoleArn },
          clientConfig: {
            credentials: clientConfigCredentials,
          },
        },
        chainCredentialsProvider
      );
      await provider({
        callerClientConfig: {
          region: async () => "us-west-2",
          credentialDefaultProvider: callerClientCredentialsProvider,
        },
      });
      expect(masterCredentials).not.toHaveBeenCalled();
      expect(clientConfigCredentials).toHaveBeenCalled();
      expect(callerClientCredentials).not.toHaveBeenCalled();
      expect(chainCredentials).not.toHaveBeenCalled();
    });
    it("should use with 3rd priority caller client's credentialDefaultProvider", async () => {
      const provider = fromTemporaryCredentials(
        {
          params: { RoleArn },
        },
        chainCredentialsProvider
      );
      await provider({
        callerClientConfig: {
          region: async () => "us-west-2",
          credentialDefaultProvider: callerClientCredentialsProvider,
        },
      });
      expect(masterCredentials).not.toHaveBeenCalled();
      expect(clientConfigCredentials).not.toHaveBeenCalled();
      expect(callerClientCredentials).toHaveBeenCalled();
      expect(chainCredentials).not.toHaveBeenCalled();
    });
    it("should use with 4th priority the node default provider chain (if in Node.js)", async () => {
      const provider = fromTemporaryCredentials(
        {
          params: { RoleArn },
        },
        chainCredentialsProvider
      );
      await provider({
        callerClientConfig: {
          region: async () => "us-west-2",
        },
      });
      expect(masterCredentials).not.toHaveBeenCalled();
      expect(clientConfigCredentials).not.toHaveBeenCalled();
      expect(callerClientCredentials).not.toHaveBeenCalled();
      expect(chainCredentials).toHaveBeenCalled();
    });
  });

  it("uses caller client options if not overridden with provider client options", async () => {
    const provider = fromTemporaryCredentialsNode({
      params: {
        RoleArn,
        RoleSessionName,
      },
    });
    const logger = {
      debug() {},
      info() {},
      warn() {},
      error() {},
    };
    const credentials = {
      accessKeyId: "",
      secretAccessKey: "",
    };
    const credentialProvider = async () => credentials;
    const regionProvider = async () => "B";
    await provider({
      callerClientConfig: {
        profile: "A",
        region: regionProvider,
        logger,
        requestHandler: Symbol.for("requestHandler") as any,
        credentialDefaultProvider: () => credentialProvider,
      },
    });
    expect(vi.mocked(STSClient as any).mock.calls[0][0]).toEqual({
      profile: "A",
      region: regionProvider,
      logger,
      requestHandler: Symbol.for("requestHandler") as any,
      // mockImpl resolved the credentials.
      credentials,
    });
  });

  it("should allow assume roles assuming roles assuming roles ad infinitum", async () => {
    const roleArnOf = (id: string) => `arn:aws:iam::123456789:role/${id}`;
    const idOf = (roleArn: string) => roleArn.split("/")?.[1] ?? "UNKNOWN";
    const provider = fromTemporaryCredentials({
      params: { RoleArn: roleArnOf("third") },
      masterCredentials: fromTemporaryCredentials({
        params: { RoleArn: roleArnOf("second") },
        masterCredentials: fromTemporaryCredentials({
          params: { RoleArn: roleArnOf("first") },
        }),
      }),
    });
    mockSend.mockReset().mockImplementation((mockCommand) => ({
      Credentials: {
        AccessKeyId: `access_id_from_${idOf(mockCommand.input.RoleArn)}`,
        SecretAccessKey: "SECRET_ACCESS_KEY",
        SessionToken: "SESSION_TOKEN",
      },
    }));
    const credentials = await provider();
    expect(mockSend.mock.calls.length).toBe(3);
    expect((AssumeRoleCommand as unknown as any).mock.calls.length).toBe(3);
    expect(credentials.accessKeyId).toBe("access_id_from_third");
    // Creates STS Client with right master credentials and assume role with
    // expected role arn.
    expect(vi.mocked(STSClient as any).mock.results.length).toBe(3);
    const outmostClient = vi.mocked(STSClient as any).mock.results[0].value;
    expect(outmostClient.config.credentials).toEqual(expect.objectContaining({ accessKeyId: "access_id_from_second" }));
    expect((outmostClient.send as any).mock.calls.length).toBe(1);
    expect((outmostClient.send as any).mock.calls[0][0].input).toEqual(
      expect.objectContaining({ RoleArn: roleArnOf("third") })
    );

    const middleClient = vi.mocked(STSClient as any).mock.results[1].value;
    expect(middleClient.config.credentials).toEqual(expect.objectContaining({ accessKeyId: "access_id_from_first" }));
    expect((middleClient.send as any).mock.calls.length).toBe(1);
    expect((middleClient.send as any).mock.calls[0][0].input).toEqual(
      expect.objectContaining({ RoleArn: roleArnOf("second") })
    );

    const innermostClient = vi.mocked(STSClient as any).mock.results[2].value;
    expect(innermostClient.config.credentials).toEqual(undefined);
    expect((innermostClient.send as any).mock.calls.length).toBe(1);
    expect((innermostClient.send as any).mock.calls[0][0].input).toEqual(
      expect.objectContaining({ RoleArn: roleArnOf("first") })
    );

    // Call assume role API with expected chronological order
    expect(mockSend.mock.calls[0][0].input).toEqual(expect.objectContaining({ RoleArn: roleArnOf("first") }));
    expect(mockSend.mock.calls[1][0].input).toEqual(expect.objectContaining({ RoleArn: roleArnOf("second") }));
    expect(mockSend.mock.calls[2][0].input).toEqual(expect.objectContaining({ RoleArn: roleArnOf("third") }));

    // Should not create extra clients if credentials is still valid
    await provider();
    expect(vi.mocked(STSClient as any).mock.results.length).toBe(3);
  });

  it("should support assuming a role with multi-factor authentication", async () => {
    const SerialNumber = "SERIAL_NUMBER";
    const mfaCode = "MFA_CODE";
    const mfaCodeProvider = vi.fn().mockResolvedValue(mfaCode);
    const provider = fromTemporaryCredentialsNode({
      params: { RoleArn, SerialNumber, RoleSessionName },
      mfaCodeProvider,
      masterCredentials,
    });
    await provider();
    expect(mfaCodeProvider).toHaveBeenCalledWith(SerialNumber);
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        input: {
          RoleArn,
          RoleSessionName,
          SerialNumber,
          TokenCode: mfaCode,
        },
      })
    );
  });

  it("should reject the promise with a terminal error if a MFA serial presents but mfaCodeProvider is missing", async () => {
    const SerialNumber = "SERIAL_NUMBER";
    try {
      await fromTemporaryCredentialsNode({
        params: { RoleArn, SerialNumber, RoleSessionName },
      })();
      fail("this test must fail");
    } catch (e) {
      expect(e.message).toEqual(expect.stringContaining("Temporary credential requires multi-factor authentication"));
      expect(e.tryNextLink).toBe(false);
    }
  });

  describe("env configuration", () => {
    beforeEach(() => {
      iniProfileData = {
        default: {
          region: "us-west-2",
        },
        abc: {
          region: "eu-central-1",
        },
        xyz: {
          region: "us-west-1",
        },
        regionless: {},
      };
    });

    it("should allow region configuration from config file", async () => {
      const provider = fromTemporaryCredentialsNode({
        params: {
          RoleArn,
          RoleSessionName,
        },
        masterCredentials,
      });
      await provider();
      expect(vi.mocked(STSClient as any).mock.calls[0][0]).toMatchObject({
        region: "us-west-2",
      });
    });

    it("should allow region configuration from config file non-default profile", async () => {
      // SDK does not use AWS_DEFAULT_PROFILE.
      process.env.AWS_PROFILE = "xyz";
      const provider = fromTemporaryCredentialsNode({
        params: {
          RoleArn,
          RoleSessionName,
        },
        masterCredentials,
      });
      await provider();
      expect(vi.mocked(STSClient as any).mock.calls[0][0]).toMatchObject({
        region: "us-west-1",
      });
    });

    it("should allow region configuration from env", async () => {
      // SDK does not use AWS_DEFAULT_REGION.
      process.env.AWS_REGION = "ap-southeast-7";
      const provider = fromTemporaryCredentialsNode({
        params: {
          RoleArn,
          RoleSessionName,
        },
        masterCredentials,
      });
      await provider();
      expect(vi.mocked(STSClient as any).mock.calls[0][0]).toMatchObject({
        region: "ap-southeast-7",
      });
    });

    it("should allow region configuration from env overriding region in profile", async () => {
      process.env.AWS_PROFILE = "xyz";
      process.env.AWS_REGION = "eu-west-1";
      const provider = fromTemporaryCredentialsNode({
        params: {
          RoleArn,
          RoleSessionName,
        },
        masterCredentials,
      });
      await provider();
      expect(vi.mocked(STSClient as any).mock.calls[0][0]).toMatchObject({
        region: "eu-west-1",
      });
    });

    it("should allow region configuration from env overriding region in profile where profile in code overrides env profile", async () => {
      process.env.AWS_PROFILE = "xyz";
      const provider = fromTemporaryCredentialsNode({
        params: {
          RoleArn,
          RoleSessionName,
        },
        masterCredentials,
        clientConfig: {
          profile: "abc",
        },
      });
      await provider();
      expect(vi.mocked(STSClient as any).mock.calls[0][0]).toMatchObject({
        region: "eu-central-1",
      });
    });

    it("should use us-east-1 if no region is configured anywhere", async () => {
      // no configured region for the provider
      // no caller client with region
      // no region env
      // no region in profile
      process.env.AWS_PROFILE = "regionless";
      process.env.AWS_REGION = undefined;
      const provider = fromTemporaryCredentialsNode({
        params: {
          RoleArn,
          RoleSessionName,
        },
        masterCredentials,
      });
      await provider();
      expect(vi.mocked(STSClient as any).mock.calls[0][0]).toMatchObject({
        region: "us-east-1",
      });
    });
  });
});
