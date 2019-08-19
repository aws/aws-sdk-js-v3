import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
export type DescribeImportTasksExceptionsUnion =
  | AuthorizationErrorException
  | InvalidParameterValueException
  | ServerInternalErrorException;
