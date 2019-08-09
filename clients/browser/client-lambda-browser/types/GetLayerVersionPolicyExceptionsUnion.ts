import { ServiceException } from "./ServiceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type GetLayerVersionPolicyExceptionsUnion =
  | ServiceException
  | ResourceNotFoundException
  | TooManyRequestsException
  | InvalidParameterValueException;
