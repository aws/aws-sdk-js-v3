import { ResourceInUseException } from "./ResourceInUseException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
export type StartImportTaskExceptionsUnion =
  | ResourceInUseException
  | AuthorizationErrorException
  | InvalidParameterValueException
  | ServerInternalErrorException;
