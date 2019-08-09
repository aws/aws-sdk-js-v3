import { DescribeBandwidthRateLimitInput } from "./DescribeBandwidthRateLimitInput";
import { DescribeBandwidthRateLimitOutput } from "./DescribeBandwidthRateLimitOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
