import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteUserExceptionsUnion =
  | ServiceUnavailableException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException;
