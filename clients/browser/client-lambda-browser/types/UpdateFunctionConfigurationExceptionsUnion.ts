import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceConflictException } from "./ResourceConflictException";
import { PreconditionFailedException } from "./PreconditionFailedException";
export type UpdateFunctionConfigurationExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | InvalidParameterValueException
  | TooManyRequestsException
  | ResourceConflictException
  | PreconditionFailedException;
