import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerException } from "./InternalServerException";
export type DeleteTerminologyExceptionsUnion =
  | ResourceNotFoundException
  | TooManyRequestsException
  | InternalServerException;
