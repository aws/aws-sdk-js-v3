import { ServiceException } from "./ServiceException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteAliasExceptionsUnion =
  | ServiceException
  | InvalidParameterValueException
  | TooManyRequestsException;
