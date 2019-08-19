import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type DescribeDirectoriesExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidParameterException
  | InvalidNextTokenException
  | ClientException
  | ServiceException;
