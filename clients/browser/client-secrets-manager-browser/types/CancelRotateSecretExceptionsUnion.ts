import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type CancelRotateSecretExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InternalServiceError
  | InvalidRequestException;
