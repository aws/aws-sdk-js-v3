import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceConflictException } from "./ResourceConflictException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateAliasExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | ResourceConflictException
  | InvalidParameterValueException
  | TooManyRequestsException;
