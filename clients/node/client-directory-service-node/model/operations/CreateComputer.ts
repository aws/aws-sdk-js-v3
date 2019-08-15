import { CreateComputerInput } from "../shapes/CreateComputerInput";
import { CreateComputerOutput } from "../shapes/CreateComputerOutput";
import { AuthenticationFailedException } from "../shapes/AuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateComputer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateComputer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateComputerInput
  },
  output: {
    shape: CreateComputerOutput
  },
  errors: [
    {
      shape: AuthenticationFailedException
    },
    {
      shape: DirectoryUnavailableException
    },
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
      shape: UnsupportedOperationException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
