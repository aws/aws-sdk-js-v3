import { PutFunctionConcurrencyInput } from "../shapes/PutFunctionConcurrencyInput";
import { PutFunctionConcurrencyOutput } from "../shapes/PutFunctionConcurrencyOutput";
import { ServiceException } from "../shapes/ServiceException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutFunctionConcurrency: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutFunctionConcurrency",
  http: {
    method: "PUT",
    requestUri: "/2017-10-31/functions/{FunctionName}/concurrency"
  },
  input: {
    shape: PutFunctionConcurrencyInput
  },
  output: {
    shape: PutFunctionConcurrencyOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
