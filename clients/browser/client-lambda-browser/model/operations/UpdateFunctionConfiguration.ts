import { UpdateFunctionConfigurationInput } from "../shapes/UpdateFunctionConfigurationInput";
import { UpdateFunctionConfigurationOutput } from "../shapes/UpdateFunctionConfigurationOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateFunctionConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFunctionConfiguration",
  http: {
    method: "PUT",
    requestUri: "/2015-03-31/functions/{FunctionName}/configuration"
  },
  input: {
    shape: UpdateFunctionConfigurationInput
  },
  output: {
    shape: UpdateFunctionConfigurationOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
