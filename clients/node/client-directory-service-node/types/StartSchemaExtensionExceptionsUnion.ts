import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { SnapshotLimitExceededException } from "./SnapshotLimitExceededException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
export type StartSchemaExtensionExceptionsUnion =
  | DirectoryUnavailableException
  | EntityDoesNotExistException
  | InvalidParameterException
  | SnapshotLimitExceededException
  | ClientException
  | ServiceException;
