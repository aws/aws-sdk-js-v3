import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PreconditionFailedException } from "./PreconditionFailedException";
export type RemovePermissionExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | InvalidParameterValueException
  | TooManyRequestsException
  | PreconditionFailedException;
