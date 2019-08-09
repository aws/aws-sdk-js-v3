import { DeleteBandwidthRateLimitInput } from "./DeleteBandwidthRateLimitInput";
import { DeleteBandwidthRateLimitOutput } from "./DeleteBandwidthRateLimitOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
