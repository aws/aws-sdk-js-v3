import {
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  fromContainerMetadata,
  fromInstanceMetadata,
} from "@smithy/credential-provider-imds";
import { CredentialsProviderError } from "@smithy/property-provider";

import { ENV_IMDS_DISABLED, remoteProvider } from "./remoteProvider";

jest.mock("@smithy/credential-provider-imds");

describe(remoteProvider.name, () => {
  const ORIGINAL_ENV = process.env;
  const mockInit = { timeout: 10000, maxRetries: 5 };
  const mockCredsFromContainer = {
    accessKeyId: "mockContainerAccessKeyId",
    secretAccessKey: "mockContainerSecretAccessKey",
  };
  const mockSourceCredsFromInstanceMetadata = {
    accessKeyId: "mockInstanceMetadataAccessKeyId",
    secretAccessKey: "mockInstanceMetadataSecretAccessKey",
  };
  const mockFromHttp = jest.fn().mockReturnValue(async () => mockCredsFromContainer);

  const sampleFullUri = "http://localhost";
  const sampleRelativeUri = "/";

  beforeEach(() => {
    process.env = {
      ...ORIGINAL_ENV,
      [ENV_CMDS_RELATIVE_URI]: undefined,
      [ENV_CMDS_FULL_URI]: undefined,
      [ENV_IMDS_DISABLED]: undefined,
    };

    jest.mock("@aws-sdk/credential-provider-http", () => ({
      fromHttp: mockFromHttp,
    }));
    (fromContainerMetadata as jest.Mock).mockReturnValue(async () => mockCredsFromContainer);
    (fromInstanceMetadata as jest.Mock).mockReturnValue(async () => mockSourceCredsFromInstanceMetadata);
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
    jest.clearAllMocks();
  });

  it(`returns fromContainerMetadata if env[${ENV_CMDS_RELATIVE_URI}] is set`, async () => {
    process.env[ENV_CMDS_RELATIVE_URI] = sampleRelativeUri;
    const receivedCreds = await (await remoteProvider(mockInit))();
    expect(receivedCreds).toStrictEqual(mockCredsFromContainer);
    expect(mockFromHttp).toHaveBeenCalledWith(mockInit);
    expect(fromContainerMetadata).toHaveBeenCalledWith(mockInit);
    expect(fromInstanceMetadata).not.toHaveBeenCalled();
  });

  it(`returns fromContainerMetadata if env[${ENV_CMDS_FULL_URI}] is set`, async () => {
    process.env[ENV_CMDS_FULL_URI] = sampleFullUri;
    const receivedCreds = await (await remoteProvider(mockInit))();
    expect(receivedCreds).toStrictEqual(mockCredsFromContainer);
    expect(mockFromHttp).toHaveBeenCalledWith(mockInit);
    expect(fromContainerMetadata).toHaveBeenCalledWith(mockInit);
    expect(fromInstanceMetadata).not.toHaveBeenCalled();
  });

  it(`throws if env['${ENV_IMDS_DISABLED}'] is set`, async () => {
    process.env[ENV_IMDS_DISABLED] = "1";
    const expectedError = new CredentialsProviderError("EC2 Instance Metadata Service access disabled");
    try {
      await (
        await remoteProvider(mockInit)
      )();
      fail(`expectedError ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(mockFromHttp).not.toHaveBeenCalled();
    expect(fromContainerMetadata).not.toHaveBeenCalled();
    expect(fromInstanceMetadata).not.toHaveBeenCalled();
  });

  it("returns fromInstanceMetadata if environment variables are not set", async () => {
    const receivedCreds = await (await remoteProvider(mockInit))();
    expect(receivedCreds).toStrictEqual(mockSourceCredsFromInstanceMetadata);
    expect(fromInstanceMetadata).toHaveBeenCalledWith(mockInit);
    expect(fromContainerMetadata).not.toHaveBeenCalled();
    expect(mockFromHttp).not.toHaveBeenCalled();
  });
});
