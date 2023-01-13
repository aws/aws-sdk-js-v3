import { SignatureV4 } from "@aws-sdk/signature-v4";
import { AwsCredentialIdentity } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { getSigV4Signer, GetSigV4SignerOptions } from "./getSigV4Signer";

jest.mock("@aws-sdk/util-middleware");
jest.mock("@aws-sdk/signature-v4");

describe(getSigV4Signer.name, () => {
  const SIGV4_SIGNER = Symbol("getSigV4Signer");
  const NORMALIZED_SIGV4_SIGNER = async () => SIGV4_SIGNER;

  beforeAll(jest.clearAllMocks);
  afterAll(jest.clearAllMocks);

  (SignatureV4 as jest.Mock).mockImplementation(() => SIGV4_SIGNER);
  (normalizeProvider as jest.Mock).mockReturnValue(NORMALIZED_SIGV4_SIGNER);

  it("should getSigV4Signer with credentials and options", () => {
    const MOCK_CREDENTIALS = async () => ({} as AwsCredentialIdentity);
    const MOCK_INPUT = {
      service: "service",
    } as GetSigV4SignerOptions;
    const output = getSigV4Signer(MOCK_CREDENTIALS, MOCK_INPUT);
    expect(output).toBe(NORMALIZED_SIGV4_SIGNER);
    expect(SignatureV4).toBeCalledTimes(1);
    expect(normalizeProvider).toBeCalledTimes(1);
  });
});
