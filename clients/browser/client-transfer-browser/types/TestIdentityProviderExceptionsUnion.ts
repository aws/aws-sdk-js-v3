import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type TestIdentityProviderExceptionsUnion =
  | ServiceUnavailableException
  | InternalServiceError
  | InvalidRequestException
  | ResourceNotFoundException;
