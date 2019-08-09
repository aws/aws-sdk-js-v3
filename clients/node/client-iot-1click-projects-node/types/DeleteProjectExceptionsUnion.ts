import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteProjectExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException;
