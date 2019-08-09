import { InvalidParameterException } from "./InvalidParameterException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryAlreadySharedException } from "./DirectoryAlreadySharedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type RejectSharedDirectoryExceptionsUnion =
  | InvalidParameterException
  | EntityDoesNotExistException
  | DirectoryAlreadySharedException
  | ClientException
  | ServiceException;
