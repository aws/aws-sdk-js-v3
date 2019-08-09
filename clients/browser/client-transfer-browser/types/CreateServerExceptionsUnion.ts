import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
export type CreateServerExceptionsUnion =
  | ServiceUnavailableException
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException;
