import { DirectoryLimitExceededException } from "./DirectoryLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
export type CreateMicrosoftADExceptionsUnion =
  | DirectoryLimitExceededException
  | InvalidParameterException
  | ClientException
  | ServiceException
  | UnsupportedOperationException;
