import { DescribeMatchmakingInput } from "../shapes/DescribeMatchmakingInput";
import { DescribeMatchmakingOutput } from "../shapes/DescribeMatchmakingOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMatchmaking: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMatchmaking",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMatchmakingInput
  },
  output: {
    shape: DescribeMatchmakingOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: UnsupportedRegionException
    }
  ]
};
