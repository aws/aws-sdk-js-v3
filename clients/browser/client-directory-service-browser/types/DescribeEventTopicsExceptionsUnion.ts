import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type DescribeEventTopicsExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidParameterException
  | ClientException
  | ServiceException;
