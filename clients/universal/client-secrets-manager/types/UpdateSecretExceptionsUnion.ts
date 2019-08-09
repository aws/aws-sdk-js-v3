import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { EncryptionFailure } from "./EncryptionFailure";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { MalformedPolicyDocumentException } from "./MalformedPolicyDocumentException";
import { InternalServiceError } from "./InternalServiceError";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
export type UpdateSecretExceptionsUnion =
  | InvalidParameterException
  | InvalidRequestException
  | LimitExceededException
  | EncryptionFailure
  | ResourceExistsException
  | ResourceNotFoundException
  | MalformedPolicyDocumentException
  | InternalServiceError
  | PreconditionNotMetException;
