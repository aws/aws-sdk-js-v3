import { ListVersionsByFunctionInput } from "../shapes/ListVersionsByFunctionInput";
import { ListVersionsByFunctionOutput } from "../shapes/ListVersionsByFunctionOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVersionsByFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVersionsByFunction",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/functions/{FunctionName}/versions"
  },
  input: {
    shape: ListVersionsByFunctionInput
  },
  output: {
    shape: ListVersionsByFunctionOutput
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
    }
  ]
};
