import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
export type GetTerminologyExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterValueException
  | TooManyRequestsException
  | InternalServerException;
