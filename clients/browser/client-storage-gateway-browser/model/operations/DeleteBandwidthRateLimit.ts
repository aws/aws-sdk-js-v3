import { DeleteBandwidthRateLimitInput } from "../shapes/DeleteBandwidthRateLimitInput";
import { DeleteBandwidthRateLimitOutput } from "../shapes/DeleteBandwidthRateLimitOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteBandwidthRateLimit: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteBandwidthRateLimit",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteBandwidthRateLimitInput
  },
  output: {
    shape: DeleteBandwidthRateLimitOutput
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
