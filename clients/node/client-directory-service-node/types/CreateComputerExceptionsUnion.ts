import { AuthenticationFailedException } from "./AuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type CreateComputerExceptionsUnion =
  | AuthenticationFailedException
  | DirectoryUnavailableException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | UnsupportedOperationException
  | ClientException
  | ServiceException;
