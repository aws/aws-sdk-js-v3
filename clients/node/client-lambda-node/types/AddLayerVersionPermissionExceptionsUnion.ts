import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { PolicyLengthExceededException } from "./PolicyLengthExceededException";
import { PreconditionFailedException } from "./PreconditionFailedException";
export type AddLayerVersionPermissionExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | ResourceConflictException
  | TooManyRequestsException
  | InvalidParameterValueException
  | PolicyLengthExceededException
  | PreconditionFailedException;
