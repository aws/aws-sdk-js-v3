import { InvalidParameterException } from "./InvalidParameterException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type EnableRadiusExceptionsUnion =
  | InvalidParameterException
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | ClientException
  | ServiceException;
