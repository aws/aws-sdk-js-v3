import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type GetDirectoryLimitsExceptionsUnion =
  | EntityDoesNotExistException
  | ClientException
  | ServiceException;
