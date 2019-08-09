import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type ListIpRoutesExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ClientException
  | ServiceException;
