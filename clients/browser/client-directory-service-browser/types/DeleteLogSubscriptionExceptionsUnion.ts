import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type DeleteLogSubscriptionExceptionsUnion =
  | EntityDoesNotExistException
  | UnsupportedOperationException
  | ClientException
  | ServiceException;
