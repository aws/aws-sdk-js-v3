import { ListServerNeighborsInput } from "../shapes/ListServerNeighborsInput";
import { ListServerNeighborsOutput } from "../shapes/ListServerNeighborsOutput";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalErrorException } from "../shapes/ServerInternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
