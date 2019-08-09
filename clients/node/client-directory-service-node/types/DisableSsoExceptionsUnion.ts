import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { AuthenticationFailedException } from "./AuthenticationFailedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type DisableSsoExceptionsUnion =
  | EntityDoesNotExistException
  | InsufficientPermissionsException
  | AuthenticationFailedException
  | ClientException
  | ServiceException;
