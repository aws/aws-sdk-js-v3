import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { DomainControllerLimitExceededException } from "./DomainControllerLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type UpdateNumberOfDomainControllersExceptionsUnion =
  | EntityDoesNotExistException
  | DirectoryUnavailableException
  | DomainControllerLimitExceededException
  | InvalidParameterException
  | UnsupportedOperationException
  | ClientException
  | ServiceException;
