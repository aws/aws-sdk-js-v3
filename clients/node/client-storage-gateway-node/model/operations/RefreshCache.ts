import { RefreshCacheInput } from "../shapes/RefreshCacheInput";
import { RefreshCacheOutput } from "../shapes/RefreshCacheOutput";
import { InvalidGatewayRequestException } from "../shapes/InvalidGatewayRequestException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RefreshCache: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RefreshCache",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RefreshCacheInput
  },
  output: {
    shape: RefreshCacheOutput
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
