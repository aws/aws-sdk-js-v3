const sendMock = jest.fn();
jest.mock("@aws-sdk/client-sts", () => ({
  STSClient: jest.fn().mockImplementation(function (config) {
    this.config = config;
    this.send = jest.fn().mockImplementation(async function (command) {
      // Mock resolving client credentials provider at send()
      if (typeof this.config.credentials === "function") this.config.credentials = await this.config.credentials();
      return await sendMock(command);
    });
    return this;
  }),
  AssumeRoleCommand: jest.fn().mockImplementation(function (params) {
    // Return the input so we can assert the input parameters in client's send()
    return {
      input: params,
      command: "ASSUME_ROLE",
    };
  }),
}));

import { AssumeRoleCommand, STSClient } from "@aws-sdk/client-sts";

import { fromTemporaryCredentials } from "./fromTemporaryCredentials";

describe("fromTemporaryCredentials", () => {
  const RoleArn = "ROLE_ARN";
  const RoleSessionName = "ROLE_SESSION_NAME";
  const masterCredentials = {
    accessKeyId: "ACCESS_KEY_ID",
    secretAccessKey: "SECRET_ACCESS_KEY",
  };
  const region = "US_BAR_1";

  beforeEach(() => {
    jest.clearAllMocks();
    sendMock.mockResolvedValueOnce({
      Credentials: {
        AccessKeyId: "ACCESS_KEY_ID",
        SecretAccessKey: "SECRET_ACCESS_KEY",
        SessionToken: "SESSION_TOKEN",
      },
    });
  });

  it("should call STS::AssumeRole API with master credentials", async () => {
    const options = {
      params: {
        RoleArn,
        RoleSessionName,
      },
      masterCredentials,
      clientConfig: { region },
    };
    const provider = fromTemporaryCredentials(options);
    const credential = await provider();
    expect(credential).toEqual({
      accessKeyId: "ACCESS_KEY_ID",
      secretAccessKey: "SECRET_ACCESS_KEY",
      sessionToken: "SESSION_TOKEN",
    });
    expect(STSClient as jest.Mock).toBeCalledWith({
      credentials: masterCredentials,
      region,
    });
    expect(AssumeRoleCommand as jest.Mock).toBeCalledWith({
      RoleArn,
      RoleSessionName,
    });
    expect(sendMock as jest.Mock).toBeCalledWith({ command: "ASSUME_ROLE", input: options.params });
  });

  it("should create STS client if not supplied", async () => {
    const provider = fromTemporaryCredentials({
      params: {
        RoleArn,
        RoleSessionName,
      },
      masterCredentials,
    });
    await provider();
    expect(STSClient as jest.Mock).toBeCalledWith({
      credentials: masterCredentials,
    });
  });

  it("should resolve default credentials if master credential is not supplied", async () => {
    const provider = fromTemporaryCredentials({
      params: {
        RoleArn,
        RoleSessionName,
      },
    });
    await provider();
    expect(STSClient as jest.Mock).toBeCalledWith({});
  });

  it("should create a role session name if none provided", async () => {
    const provider = fromTemporaryCredentials({
      params: { RoleArn },
    });
    await provider();
    expect(AssumeRoleCommand as jest.Mock).toBeCalledWith({
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
    sendMock.mockReset().mockImplementation((mockCommand) => ({
      Credentials: {
        AccessKeyId: `access_id_from_${idOf(mockCommand.input.RoleArn)}`,
        SecretAccessKey: "SECRET_ACCESS_KEY",
        SessionToken: "SESSION_TOKEN",
      },
    }));
    const credentials = await provider();
    expect(sendMock.mock.calls.length).toBe(3);
    expect((AssumeRoleCommand as jest.Mock).mock.calls.length).toBe(3);
    expect(credentials.accessKeyId).toBe("access_id_from_third");
    // Creates STS Client with right master credentials and assume role with
    // expected role arn.
    expect((STSClient as jest.Mock).mock.results.length).toBe(3);
    const outmostClient = (STSClient as jest.Mock).mock.results[0].value;
    expect(outmostClient.config.credentials).toEqual(expect.objectContaining({ accessKeyId: "access_id_from_second" }));
    expect((outmostClient.send as jest.Mock).mock.calls.length).toBe(1);
    expect((outmostClient.send as jest.Mock).mock.calls[0][0].input).toEqual(
      expect.objectContaining({ RoleArn: roleArnOf("third") })
    );

    const middleClient = (STSClient as jest.Mock).mock.results[1].value;
    expect(middleClient.config.credentials).toEqual(expect.objectContaining({ accessKeyId: "access_id_from_first" }));
    expect((middleClient.send as jest.Mock).mock.calls.length).toBe(1);
    expect((middleClient.send as jest.Mock).mock.calls[0][0].input).toEqual(
      expect.objectContaining({ RoleArn: roleArnOf("second") })
    );

    const innermostClient = (STSClient as jest.Mock).mock.results[2].value;
    expect(innermostClient.config.credentials).toEqual(undefined);
    expect((innermostClient.send as jest.Mock).mock.calls.length).toBe(1);
    expect((innermostClient.send as jest.Mock).mock.calls[0][0].input).toEqual(
      expect.objectContaining({ RoleArn: roleArnOf("first") })
    );

    // Call assume role API with expected chronological order
    expect(sendMock.mock.calls[0][0].input).toEqual(expect.objectContaining({ RoleArn: roleArnOf("first") }));
    expect(sendMock.mock.calls[1][0].input).toEqual(expect.objectContaining({ RoleArn: roleArnOf("second") }));
    expect(sendMock.mock.calls[2][0].input).toEqual(expect.objectContaining({ RoleArn: roleArnOf("third") }));

    // Should not create extra clients if credentials is still valid
    await provider();
    expect((STSClient as jest.Mock).mock.results.length).toBe(3);
  });

  it("should support assuming a role with multi-factor authentication", async () => {
    const SerialNumber = "SERIAL_NUMBER";
    const mfaCode = "MFA_CODE";
    const mfaCodeProvider = jest.fn().mockResolvedValue(mfaCode);
    const provider = fromTemporaryCredentials({
      params: { RoleArn, SerialNumber, RoleSessionName },
      mfaCodeProvider,
    });
    await provider();
    expect(mfaCodeProvider).toBeCalledWith(SerialNumber);
    expect(sendMock).toBeCalledWith(
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
