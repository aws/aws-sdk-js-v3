import { ListFunctionsInput } from "../shapes/ListFunctionsInput";
import { ListFunctionsOutput } from "../shapes/ListFunctionsOutput";
import { ServiceException } from "../shapes/ServiceException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListFunctions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListFunctions",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/functions/"
  },
  input: {
    shape: ListFunctionsInput
  },
  output: {
    shape: ListFunctionsOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
