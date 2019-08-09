import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ImportSshPublicKeyExceptionsUnion =
  | ServiceUnavailableException
  | InternalServiceError
  | InvalidRequestException
  | ResourceExistsException
  | ResourceNotFoundException;
