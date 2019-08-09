import { GetFunctionConfigurationInput } from "./GetFunctionConfigurationInput";
import { GetFunctionConfigurationOutput } from "./GetFunctionConfigurationOutput";
import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFunctionConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFunctionConfiguration",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/functions/{FunctionName}/configuration"
  },
  input: {
    shape: GetFunctionConfigurationInput
  },
  output: {
    shape: GetFunctionConfigurationOutput
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
    }
  ]
};
