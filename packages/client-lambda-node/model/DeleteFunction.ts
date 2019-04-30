import { DeleteFunctionInput } from "./DeleteFunctionInput";
import { DeleteFunctionOutput } from "./DeleteFunctionOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceConflictException } from "./ResourceConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
