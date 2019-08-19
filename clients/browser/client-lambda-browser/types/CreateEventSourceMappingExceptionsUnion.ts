import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type CreateEventSourceMappingExceptionsUnion =
  | ServiceException
  | InvalidParameterValueException
  | ResourceConflictException
  | TooManyRequestsException
  | ResourceNotFoundException;
