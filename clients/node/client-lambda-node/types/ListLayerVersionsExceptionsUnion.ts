import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListLayerVersionsExceptionsUnion =
  | ServiceException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | TooManyRequestsException;
