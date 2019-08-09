import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { IncompatibleSchemaException } from "./IncompatibleSchemaException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { LimitExceededException } from "./LimitExceededException";
export type UpgradePublishedSchemaExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | IncompatibleSchemaException
  | AccessDeniedException
  | ResourceNotFoundException
  | InvalidAttachmentException
  | LimitExceededException;
