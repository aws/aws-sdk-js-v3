import { ListAliasesInput } from "../shapes/ListAliasesInput";
import { ListAliasesOutput } from "../shapes/ListAliasesOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAliases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAliases",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/functions/{FunctionName}/aliases"
  },
  input: {
    shape: ListAliasesInput
  },
  output: {
    shape: ListAliasesOutput
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
