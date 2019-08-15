import { GetFunctionConfigurationInput } from "../shapes/GetFunctionConfigurationInput";
import { GetFunctionConfigurationOutput } from "../shapes/GetFunctionConfigurationOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
