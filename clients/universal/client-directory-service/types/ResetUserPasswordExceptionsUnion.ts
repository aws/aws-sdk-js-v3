import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { UserDoesNotExistException } from "./UserDoesNotExistException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type ResetUserPasswordExceptionsUnion =
  | DirectoryUnavailableException
  | UserDoesNotExistException
  | InvalidPasswordException
  | UnsupportedOperationException
  | EntityDoesNotExistException
  | ClientException
  | ServiceException;
