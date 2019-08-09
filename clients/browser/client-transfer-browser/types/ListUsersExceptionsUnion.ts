import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListUsersExceptionsUnion =
  | ServiceUnavailableException
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException
  | ResourceNotFoundException;
