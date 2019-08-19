import { CreateAliasInput } from "../shapes/CreateAliasInput";
import { CreateAliasOutput } from "../shapes/CreateAliasOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAlias",
  http: {
    method: "POST",
    requestUri: "/2015-03-31/functions/{FunctionName}/aliases"
  },
  input: {
    shape: CreateAliasInput
  },
  output: {
    shape: CreateAliasOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
