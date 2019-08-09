import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type UpdateConditionalForwarderExceptionsUnion =
  | EntityDoesNotExistException
  | DirectoryUnavailableException
  | InvalidParameterException
  | UnsupportedOperationException
  | ClientException
  | ServiceException;
