import { DescribeMatchmakingConfigurationsInput } from "./DescribeMatchmakingConfigurationsInput";
import { DescribeMatchmakingConfigurationsOutput } from "./DescribeMatchmakingConfigurationsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { UnsupportedRegionException } from "./UnsupportedRegionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
