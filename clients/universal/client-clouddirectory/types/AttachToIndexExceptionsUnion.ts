import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LinkNameAlreadyInUseException } from "./LinkNameAlreadyInUseException";
import { IndexedAttributeMissingException } from "./IndexedAttributeMissingException";
import { NotIndexException } from "./NotIndexException";
export type AttachToIndexExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InvalidAttachmentException
  | ResourceNotFoundException
  | LinkNameAlreadyInUseException
  | IndexedAttributeMissingException
  | NotIndexException;
