import { ResetCacheInput } from "./ResetCacheInput";
import { ResetCacheOutput } from "./ResetCacheOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
