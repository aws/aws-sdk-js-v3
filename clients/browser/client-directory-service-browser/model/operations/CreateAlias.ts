import { CreateAliasInput } from "../shapes/CreateAliasInput";
import { CreateAliasOutput } from "../shapes/CreateAliasOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateAliasInput
  },
  output: {
    shape: CreateAliasOutput
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
