import { DeleteFunctionInput } from "../shapes/DeleteFunctionInput";
import { DeleteFunctionOutput } from "../shapes/DeleteFunctionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFunction",
  http: {
    method: "DELETE",
    requestUri: "/2015-03-31/functions/{FunctionName}"
  },
  input: {
    shape: DeleteFunctionInput
  },
  output: {
    shape: DeleteFunctionOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceConflictException
    }
  ]
};
