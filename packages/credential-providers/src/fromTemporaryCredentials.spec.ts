import { AssumeRoleCommand, STSClient } from "@aws-sdk/client-sts";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromTemporaryCredentials } from "./fromTemporaryCredentials";

const mockSend = vi.fn();
const mockUsePlugin = vi.fn();
vi.mock("@aws-sdk/client-sts", () => ({
  STSClient: vi.fn().mockImplementation((config) => ({
    config,
    send: vi.fn().mockImplementation(async function (command) {
      // Mock resolving client credentials provider at send()
      if (typeof config.credentials === "function") config.credentials = await config.credentials();
      return await mockSend(command);
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

describe("fromTemporaryCredentials", () => {
  const RoleArn = "ROLE_ARN";
  const RoleSessionName = "ROLE_SESSION_NAME";
  const masterCredentials = {
    accessKeyId: "ACCESS_KEY_ID",
    secretAccessKey: "SECRET_ACCESS_KEY",
  };
  const region = "US_BAR_1";

  beforeEach(() => {
    vi.clearAllMocks();
    mockSend.mockResolvedValueOnce({
      Credentials: {
        AccessKeyId: "ACCESS_KEY_ID",
        SecretAccessKey: "SECRET_ACCESS_KEY",
        SessionToken: "SESSION_TOKEN",
      },
    });
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
    const provider = fromTemporaryCredentials(options);
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
    const provider = fromTemporaryCredentials({
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
    });
    expect(mockUsePlugin).toHaveBeenCalledTimes(1);
    expect(mockUsePlugin).toHaveBeenNthCalledWith(1, plugin);
  });

  it("should resolve default credentials if master credential is not supplied", async () => {
    const provider = fromTemporaryCredentials({
      params: {
        RoleArn,
        RoleSessionName,
      },
    });
    await provider();
    expect(vi.mocked(STSClient as any)).toHaveBeenCalledWith({});
  });

  it("should create a role session name if none provided", async () => {
    const provider = fromTemporaryCredentials({
      params: { RoleArn },
    });
    await provider();
    expect(AssumeRoleCommand as unknown as any).toHaveBeenCalledWith({
      RoleArn,
      RoleSessionName: expect.stringMatching(/^aws-sdk-js-/),
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
    const provider = fromTemporaryCredentials({
      params: { RoleArn, SerialNumber, RoleSessionName },
      mfaCodeProvider,
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
      await fromTemporaryCredentials({
        params: { RoleArn, SerialNumber, RoleSessionName },
      })();
      fail("this test must fail");
    } catch (e) {
      expect(e.message).toEqual(expect.stringContaining("Temporary credential requires multi-factor authentication"));
      expect(e.tryNextLink).toBe(false);
    }
  });
});
