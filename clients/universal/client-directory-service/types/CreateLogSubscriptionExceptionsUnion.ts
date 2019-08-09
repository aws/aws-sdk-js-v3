import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type CreateLogSubscriptionExceptionsUnion =
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | UnsupportedOperationException
  | InsufficientPermissionsException
  | ClientException
  | ServiceException;
