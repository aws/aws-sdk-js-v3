import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListTagsExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | InvalidParameterValueException
  | TooManyRequestsException;
