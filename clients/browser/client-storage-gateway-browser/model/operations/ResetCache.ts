import { ResetCacheInput } from "../shapes/ResetCacheInput";
import { ResetCacheOutput } from "../shapes/ResetCacheOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResetCache: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetCache",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetCacheInput
  },
  output: {
    shape: ResetCacheOutput
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
