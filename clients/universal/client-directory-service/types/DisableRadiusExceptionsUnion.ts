import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type DisableRadiusExceptionsUnion =
  | EntityDoesNotExistException
  | ClientException
  | ServiceException;
