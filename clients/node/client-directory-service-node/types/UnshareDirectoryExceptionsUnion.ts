import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidTargetException } from "./InvalidTargetException";
import { DirectoryNotSharedException } from "./DirectoryNotSharedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type UnshareDirectoryExceptionsUnion =
  | EntityDoesNotExistException
  | InvalidTargetException
  | DirectoryNotSharedException
  | ClientException
  | ServiceException;
