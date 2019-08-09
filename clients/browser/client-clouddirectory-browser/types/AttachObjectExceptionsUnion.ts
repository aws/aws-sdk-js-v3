import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LinkNameAlreadyInUseException } from "./LinkNameAlreadyInUseException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { FacetValidationException } from "./FacetValidationException";
export type AttachObjectExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | DirectoryNotEnabledException
  | ResourceNotFoundException
  | LinkNameAlreadyInUseException
  | InvalidAttachmentException
  | FacetValidationException;
