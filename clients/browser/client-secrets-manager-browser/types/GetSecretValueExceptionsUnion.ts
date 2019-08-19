import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { DecryptionFailure } from "./DecryptionFailure";
import { InternalServiceError } from "./InternalServiceError";
export type GetSecretValueExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidRequestException
  | DecryptionFailure
  | InternalServiceError;
