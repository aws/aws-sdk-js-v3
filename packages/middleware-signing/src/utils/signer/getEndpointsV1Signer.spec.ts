import { SignatureV4 } from "@aws-sdk/signature-v4";
import { RegionInfoProvider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved } from "../../configurations";
import { getEndpointsV1Signer } from "./getEndpointsV1Signer";

jest.mock("@aws-sdk/signature-v4");
jest.mock("@aws-sdk/util-middleware");

describe(getEndpointsV1Signer.name, () => {
  beforeAll(jest.clearAllMocks);
  afterAll(jest.clearAllMocks);

  const SIGV4_SIGNER = Symbol("getSigV4Signer");
  const MOCK_REGION = "region";
  const MOCK_REGION_PROVIDER_ARGS = {
    hostname: "hostname",
    partition: "partition",
  };
  const MOCK_SIGNING_SERVICE = "signingService";
  const MOCK_REGION_INFO_PROVIDER = jest.fn();
  const MOCK_USE_FIPS_ENDPOINT = jest.fn().mockResolvedValue(true);
  const MOCK_USE_DUALSTACK_ENDPOINT = jest.fn().mockResolvedValue(true);
  const MOCK_SHA256 = jest.fn();
  const MOCK_CREDENTIALS_PROVIDER = jest.fn();
  const MOCK_CREDENTIALS = jest.fn();

  MOCK_REGION_INFO_PROVIDER.mockReturnValue(MOCK_REGION_PROVIDER_ARGS);
  (normalizeProvider as jest.Mock).mockReturnValue(async () => MOCK_REGION);
  (SignatureV4 as jest.Mock).mockImplementation(() => SIGV4_SIGNER);

  it("should getEndpointsV1Signer", async () => {
    const MOCK_INPUT = {
      region: MOCK_REGION,
      regionInfoProvider: MOCK_REGION_INFO_PROVIDER,
      useFipsEndpoint: MOCK_USE_FIPS_ENDPOINT,
      useDualstackEndpoint: MOCK_USE_DUALSTACK_ENDPOINT,
      sha256: MOCK_SHA256,
      credentialDefaultProvider: MOCK_CREDENTIALS_PROVIDER,
      serviceId: MOCK_SIGNING_SERVICE,
      signingEscapePath: true,
    } as AwsAuthInputConfig & AwsAuthPreviouslyResolved & { regionInfoProvider: RegionInfoProvider };

    await getEndpointsV1Signer(MOCK_CREDENTIALS, MOCK_INPUT)();

    expect(MOCK_USE_FIPS_ENDPOINT).toHaveBeenCalledTimes(1);
    expect(MOCK_USE_DUALSTACK_ENDPOINT).toHaveBeenCalledTimes(1);
    expect(MOCK_REGION_INFO_PROVIDER).toHaveBeenCalled();
    expect(MOCK_REGION_INFO_PROVIDER).toHaveBeenCalledWith(MOCK_REGION, {
      useFipsEndpoint: true,
      useDualstackEndpoint: true,
    });
    expect(SignatureV4).toBeCalledTimes(1);
    expect(SignatureV4).toBeCalledWith({
      ...MOCK_INPUT,
      credentials: MOCK_CREDENTIALS,
      region: MOCK_REGION,
      service: MOCK_SIGNING_SERVICE,
      sha256: MOCK_SHA256,
      uriEscapePath: true,
    });
  });
});
