import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
export type ImportTerminologyExceptionsUnion =
  | InvalidParameterValueException
  | LimitExceededException
  | TooManyRequestsException
  | InternalServerException;
