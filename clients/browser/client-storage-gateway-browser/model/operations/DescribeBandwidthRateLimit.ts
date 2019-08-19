import { DescribeBandwidthRateLimitInput } from "../shapes/DescribeBandwidthRateLimitInput";
import { DescribeBandwidthRateLimitOutput } from "../shapes/DescribeBandwidthRateLimitOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeBandwidthRateLimit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeBandwidthRateLimit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeBandwidthRateLimitInput
  },
  output: {
    shape: DescribeBandwidthRateLimitOutput
  },
  errors: [
    {
      shape: InvalidGatewayRequestException
    },
    {
      shape: InternalServerError
    }
  ]
};
