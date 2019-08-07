import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UntagResourceExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | InvalidParameterValueException
  | TooManyRequestsException;
