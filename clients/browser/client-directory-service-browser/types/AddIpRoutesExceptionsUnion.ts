import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { InvalidParameterException } from "./InvalidParameterException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { IpRouteLimitExceededException } from "./IpRouteLimitExceededException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type AddIpRoutesExceptionsUnion =
  | EntityDoesNotExistException
  | EntityAlreadyExistsException
  | InvalidParameterException
  | DirectoryUnavailableException
  | IpRouteLimitExceededException
  | ClientException
  | ServiceException;
