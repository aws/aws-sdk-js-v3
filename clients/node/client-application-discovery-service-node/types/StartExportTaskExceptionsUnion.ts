import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
export type StartExportTaskExceptionsUnion =
  | AuthorizationErrorException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | OperationNotPermittedException;
