import { UpdateBandwidthRateLimitInput } from "./UpdateBandwidthRateLimitInput";
import { UpdateBandwidthRateLimitOutput } from "./UpdateBandwidthRateLimitOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
