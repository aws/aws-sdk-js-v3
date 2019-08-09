import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceError } from "./InternalServiceError";
export type DeleteSecretExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidRequestException
  | InternalServiceError;
