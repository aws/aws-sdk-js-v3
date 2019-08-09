import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalErrorException } from "./ServerInternalErrorException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeContinuousExportsExceptionsUnion =
  | AuthorizationErrorException
  | InvalidParameterException
  | InvalidParameterValueException
  | ServerInternalErrorException
  | OperationNotPermittedException
  | ResourceNotFoundException;
