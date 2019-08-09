import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type ListSchemaExtensionsExceptionsUnion =
  | InvalidNextTokenException
  | EntityDoesNotExistException
  | ClientException
  | ServiceException;
