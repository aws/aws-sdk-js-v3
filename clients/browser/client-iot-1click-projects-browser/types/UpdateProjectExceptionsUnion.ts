import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateProjectExceptionsUnion =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | TooManyRequestsException;
