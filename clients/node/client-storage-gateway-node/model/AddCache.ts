import { AddCacheInput } from "./AddCacheInput";
import { AddCacheOutput } from "./AddCacheOutput";
import { InvalidGatewayRequestException } from "./InvalidGatewayRequestException";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddCache: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddCache",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddCacheInput
  },
  output: {
    shape: AddCacheOutput
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
