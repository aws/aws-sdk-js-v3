import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type RemoveIpRoutesExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidParameterException
  | DirectoryUnavailableException
  | ClientException
  | ServiceException;
