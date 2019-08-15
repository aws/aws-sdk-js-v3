import { UpdateBandwidthRateLimitInput } from "../shapes/UpdateBandwidthRateLimitInput";
import { UpdateBandwidthRateLimitOutput } from "../shapes/UpdateBandwidthRateLimitOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateBandwidthRateLimit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateBandwidthRateLimit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateBandwidthRateLimitInput
  },
  output: {
    shape: UpdateBandwidthRateLimitOutput
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
