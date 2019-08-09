import { DescribeMatchmakingInput } from "./DescribeMatchmakingInput";
import { DescribeMatchmakingOutput } from "./DescribeMatchmakingOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
