import { DeleteFunctionConcurrencyInput } from "../shapes/DeleteFunctionConcurrencyInput";
import { DeleteFunctionConcurrencyOutput } from "../shapes/DeleteFunctionConcurrencyOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFunctionConcurrency: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFunctionConcurrency",
  http: {
    method: "DELETE",
    requestUri: "/2017-10-31/functions/{FunctionName}/concurrency"
  },
  input: {
    shape: DeleteFunctionConcurrencyInput
  },
  output: {
    shape: DeleteFunctionConcurrencyOutput
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
