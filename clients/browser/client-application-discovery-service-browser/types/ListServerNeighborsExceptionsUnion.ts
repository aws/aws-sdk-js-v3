import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
export type ListServerNeighborsExceptionsUnion =
  | AuthorizationErrorException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException;
