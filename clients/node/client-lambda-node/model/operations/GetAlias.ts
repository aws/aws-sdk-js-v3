import { GetAliasInput } from "../shapes/GetAliasInput";
import { GetAliasOutput } from "../shapes/GetAliasOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAlias",
  http: {
    method: "GET",
    requestUri: "/2015-03-31/functions/{FunctionName}/aliases/{Name}"
  },
  input: {
    shape: GetAliasInput
  },
  output: {
    shape: GetAliasOutput
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
