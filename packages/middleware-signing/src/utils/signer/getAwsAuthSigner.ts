import { AuthScheme, AwsCredentialIdentity, MemoizedProvider, RequestSigner } from "@aws-sdk/types";

import { AwsAuthInputConfig, AwsAuthPreviouslyResolved } from "../../configurations";
import { getEndpointsV1Signer } from "./getEndpointsV1Signer";
import { getEndpointsV2Signer } from "./getEndpointsV2Signer";

export const getAwsAuthSigner = (
  credentials: MemoizedProvider<AwsCredentialIdentity>,
  input: AwsAuthInputConfig & AwsAuthPreviouslyResolved
): ((authScheme?: AuthScheme) => Promise<RequestSigner>) =>
  input.regionInfoProvider
    ? // This branch is for endpoints V1.
      // construct a provider inferring signing from region.
      getEndpointsV1Signer(credentials, input, input.regionInfoProvider)
    : // This branch is for endpoints V2.
      // Handle endpoints v2 that resolved per-command
      // TODO: need total refactor for reference auth architecture.
      getEndpointsV2Signer(credentials, input);
