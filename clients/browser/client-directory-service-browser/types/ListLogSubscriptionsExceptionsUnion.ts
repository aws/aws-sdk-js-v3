import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type ListLogSubscriptionsExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | ClientException
  | ServiceException;
