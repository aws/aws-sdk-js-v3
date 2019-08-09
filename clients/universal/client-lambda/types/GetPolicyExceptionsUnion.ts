import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type GetPolicyExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | TooManyRequestsException
  | InvalidParameterValueException;
