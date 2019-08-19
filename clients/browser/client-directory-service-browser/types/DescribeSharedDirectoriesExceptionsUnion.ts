import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type DescribeSharedDirectoriesExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidNextTokenException
  | InvalidParameterException
  | UnsupportedOperationException
  | ClientException
  | ServiceException;
