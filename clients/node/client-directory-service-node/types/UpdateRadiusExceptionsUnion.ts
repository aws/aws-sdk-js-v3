import { InvalidParameterException } from "./InvalidParameterException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type UpdateRadiusExceptionsUnion =
  | InvalidParameterException
  | EntityDoesNotExistException
  | ClientException
  | ServiceException;
