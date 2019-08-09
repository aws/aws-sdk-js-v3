import { ListServerNeighborsInput } from "./ListServerNeighborsInput";
import { ListServerNeighborsOutput } from "./ListServerNeighborsOutput";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListServerNeighbors: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListServerNeighbors",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListServerNeighborsInput
  },
  output: {
    shape: ListServerNeighborsOutput
  },
  errors: [
    {
      shape: AuthorizationErrorException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalErrorException
    }
  ]
};
