import { GetFunctionInput } from "../shapes/GetFunctionInput";
import { GetFunctionOutput } from "../shapes/GetFunctionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFunction",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/functions/{FunctionName}"
  },
  input: {
    shape: GetFunctionInput
  },
  output: {
    shape: GetFunctionOutput
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
