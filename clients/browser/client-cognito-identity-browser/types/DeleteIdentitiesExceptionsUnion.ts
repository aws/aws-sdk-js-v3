import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
export type DeleteIdentitiesExceptionsUnion =
  | InvalidParameterException
  | TooManyRequestsException
  | InternalErrorException;
