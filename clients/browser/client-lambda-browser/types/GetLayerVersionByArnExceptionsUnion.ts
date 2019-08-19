import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type GetLayerVersionByArnExceptionsUnion =
  | ServiceException
  | InvalidParameterValueException
  | TooManyRequestsException
  | ResourceNotFoundException;
