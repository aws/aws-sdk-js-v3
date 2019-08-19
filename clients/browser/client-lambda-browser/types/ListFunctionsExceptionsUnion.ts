import { ServiceException } from "./ServiceException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
export type ListFunctionsExceptionsUnion =
  | ServiceException
  | TooManyRequestsException
  | InvalidParameterValueException;
