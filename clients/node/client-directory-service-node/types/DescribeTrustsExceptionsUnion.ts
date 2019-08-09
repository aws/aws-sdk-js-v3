import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type DescribeTrustsExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | ClientException
  | ServiceException
  | UnsupportedOperationException;
