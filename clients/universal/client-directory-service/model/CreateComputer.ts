import { CreateComputerInput } from "./CreateComputerInput";
import { CreateComputerOutput } from "./CreateComputerOutput";
import { AuthenticationFailedException } from "./AuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
