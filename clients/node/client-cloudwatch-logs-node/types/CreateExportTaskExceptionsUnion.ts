import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
export type CreateExportTaskExceptionsUnion =
  | InvalidParameterException
  | LimitExceededException
  | OperationAbortedException
  | ServiceUnavailableException
  | ResourceNotFoundException
  | ResourceAlreadyExistsException;
