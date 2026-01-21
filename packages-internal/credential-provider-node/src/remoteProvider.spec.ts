import {
  ENV_CMDS_FULL_URI,
  ENV_CMDS_RELATIVE_URI,
  fromContainerMetadata,
  fromInstanceMetadata,
} from "@smithy/credential-provider-imds";
import { CredentialsProviderError } from "@smithy/property-provider";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { ENV_IMDS_DISABLED, remoteProvider } from "./remoteProvider";

vi.mock("@smithy/credential-provider-imds");

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
const mockFromHttp = vi.fn().mockReturnValue(async () => mockCredsFromContainer);

const sampleFullUri = "http://localhost";
const sampleRelativeUri = "/";
vi.mock("@aws-sdk/credential-provider-http", () => ({
  fromHttp: mockFromHttp,
  default: {
    fromHttp: mockFromHttp,
  },
}));

describe(remoteProvider.name, () => {
  beforeEach(() => {
    process.env = {
      ...ORIGINAL_ENV,
      [ENV_CMDS_RELATIVE_URI]: undefined,
      [ENV_CMDS_FULL_URI]: undefined,
      [ENV_IMDS_DISABLED]: undefined,
    };

    vi.mocked(fromContainerMetadata).mockReturnValue(async () => mockCredsFromContainer);
    vi.mocked(fromInstanceMetadata).mockReturnValue(async () => mockSourceCredsFromInstanceMetadata);
  });

  afterEach(() => {
    process.env = ORIGINAL_ENV;
    vi.clearAllMocks();
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
