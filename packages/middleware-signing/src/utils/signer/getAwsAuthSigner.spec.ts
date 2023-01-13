import { AwsCredentialIdentity, RegionInfo } from "@aws-sdk/types";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved } from "../../configurations";
import { getAwsAuthSigner } from "./getAwsAuthSigner";
import { getEndpointsV1Signer } from "./getEndpointsV1Signer";
import { getEndpointsV2Signer } from "./getEndpointsV2Signer";

jest.mock("./getEndpointsV1Signer");
jest.mock("./getEndpointsV2Signer");

describe(getAwsAuthSigner.name, () => {
  const ENDPOINTS_V1_SIGNER = Symbol("getEndpointsV1Signer");
  const ENDPOINTS_V2_SIGNER = Symbol("getEndpointsV2Signer");

  beforeAll(jest.clearAllMocks);
  afterAll(jest.clearAllMocks);

  (getEndpointsV1Signer as jest.Mock).mockReturnValue(ENDPOINTS_V1_SIGNER);
  (getEndpointsV2Signer as jest.Mock).mockReturnValue(ENDPOINTS_V2_SIGNER);

  it("should getEndpointsV1Signer if regionInfoProvider exists", () => {
    const MOCK_CREDENTIALS = async () => ({} as AwsCredentialIdentity);
    const MOCK_INPUT = {
      regionInfoProvider: async (_) => ({} as RegionInfo),
    } as AwsAuthInputConfig & AwsAuthPreviouslyResolved;
    const output = getAwsAuthSigner(MOCK_CREDENTIALS, MOCK_INPUT);
    expect(output).toBe(ENDPOINTS_V1_SIGNER);
    expect(getEndpointsV1Signer).toBeCalledTimes(1);
    expect(getEndpointsV2Signer).not.toHaveBeenCalled;
  });

  it("should getEndpointsV2Signer if regionInfoProvider doesn't exist", () => {
    const MOCK_CREDENTIALS = async () => ({} as AwsCredentialIdentity);
    const MOCK_INPUT = {} as AwsAuthInputConfig & AwsAuthPreviouslyResolved;
    const output = getAwsAuthSigner(MOCK_CREDENTIALS, MOCK_INPUT);
    expect(output).toBe(ENDPOINTS_V2_SIGNER);
    expect(getEndpointsV1Signer).not.toHaveBeenCalled;
    expect(getEndpointsV2Signer).toBeCalledTimes(1);
  });
});
