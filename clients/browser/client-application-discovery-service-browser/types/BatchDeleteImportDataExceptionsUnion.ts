import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
export type BatchDeleteImportDataExceptionsUnion =
  | AuthorizationErrorException
  | InvalidParameterValueException
  | ServerInternalErrorException;
