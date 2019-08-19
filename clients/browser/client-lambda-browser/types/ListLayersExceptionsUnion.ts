import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type ListLayersExceptionsUnion =
  | ServiceException
  | InvalidParameterValueException
  | TooManyRequestsException;
