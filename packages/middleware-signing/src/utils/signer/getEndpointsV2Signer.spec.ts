import { SignatureV4 } from "@aws-sdk/signature-v4";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { getEndpointsV2Signer } from "./getEndpointsV2Signer";

jest.mock("@aws-sdk/signature-v4");
jest.mock("@aws-sdk/util-middleware");

describe(getEndpointsV2Signer.name, () => {
  beforeAll(jest.clearAllMocks);
  afterAll(jest.clearAllMocks);

  const SIGV4_SIGNER = Symbol("getSigV4Signer");
  const MOCK_NAME = "name";
  const MOCK_SIGNING_NAME = "signingName";
  const MOCK_REGION = "region";
  const MOCK_AUTHSCHEME = {
    name: MOCK_NAME,
    signingName: MOCK_SIGNING_NAME,
    signingRegion: MOCK_REGION,
    properties: {},
  };
  const MOCK_SHA256 = jest.fn();
  const MOCK_CREDENTIALS_PROVIDER = jest.fn();
  const MOCK_CREDENTIALS = jest.fn();

  (normalizeProvider as jest.Mock).mockReturnValue(async () => MOCK_REGION);
  (SignatureV4 as jest.Mock).mockImplementation(() => SIGV4_SIGNER);

  it("should getEndpointsV2Signer", async () => {
    const MOCK_INPUT = {
      region: MOCK_REGION,
      sha256: MOCK_SHA256,
      credentialDefaultProvider: MOCK_CREDENTIALS_PROVIDER,
      signingEscapePath: true,
    } as any;

    await getEndpointsV2Signer(MOCK_CREDENTIALS, MOCK_INPUT)(MOCK_AUTHSCHEME);

    expect(SignatureV4).toBeCalledTimes(1);
    expect(SignatureV4).toBeCalledWith({
      ...MOCK_INPUT,
      credentials: MOCK_CREDENTIALS,
      region: MOCK_REGION,
      service: MOCK_SIGNING_NAME,
      sha256: MOCK_SHA256,
      uriEscapePath: true,
    });
  });
});
