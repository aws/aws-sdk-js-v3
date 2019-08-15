import { DescribeMatchmakingConfigurationsInput } from "../shapes/DescribeMatchmakingConfigurationsInput";
import { DescribeMatchmakingConfigurationsOutput } from "../shapes/DescribeMatchmakingConfigurationsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { UnsupportedRegionException } from "../shapes/UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeMatchmakingConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMatchmakingConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMatchmakingConfigurationsInput
  },
  output: {
    shape: DescribeMatchmakingConfigurationsOutput
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
