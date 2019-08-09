import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type CreateAliasExceptionsUnion =
  | EntityAlreadyExistsException
  | EntityDoesNotExistException
  | InvalidParameterException
  | ClientException
  | ServiceException;
