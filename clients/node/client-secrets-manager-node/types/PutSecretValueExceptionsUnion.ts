import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { EncryptionFailure } from "./EncryptionFailure";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
export type PutSecretValueExceptionsUnion =
  | InvalidParameterException
  | InvalidRequestException
  | LimitExceededException
  | EncryptionFailure
  | ResourceExistsException
  | ResourceNotFoundException
  | InternalServiceError;
