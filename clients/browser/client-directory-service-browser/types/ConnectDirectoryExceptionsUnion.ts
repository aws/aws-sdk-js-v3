import { DirectoryLimitExceededException } from "./DirectoryLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type ConnectDirectoryExceptionsUnion =
  | DirectoryLimitExceededException
  | InvalidParameterException
  | ClientException
  | ServiceException;
