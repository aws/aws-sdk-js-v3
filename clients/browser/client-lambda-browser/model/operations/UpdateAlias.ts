import { UpdateAliasInput } from "../shapes/UpdateAliasInput";
import { UpdateAliasOutput } from "../shapes/UpdateAliasOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PreconditionFailedException } from "../shapes/PreconditionFailedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAlias",
  http: {
    method: "PUT",
    requestUri: "/2015-03-31/functions/{FunctionName}/aliases/{Name}"
  },
  input: {
    shape: UpdateAliasInput
  },
  output: {
    shape: UpdateAliasOutput
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
    },
    {
      shape: PreconditionFailedException
    }
  ]
};
