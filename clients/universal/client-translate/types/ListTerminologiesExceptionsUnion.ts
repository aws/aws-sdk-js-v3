import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
export type ListTerminologiesExceptionsUnion =
  | InvalidParameterValueException
  | TooManyRequestsException
  | InternalServerException;
