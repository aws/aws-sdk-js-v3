import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { IncompatibleSchemaException } from "./IncompatibleSchemaException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAttachmentException } from "./InvalidAttachmentException";
import { SchemaAlreadyExistsException } from "./SchemaAlreadyExistsException";
export type UpgradeAppliedSchemaExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | IncompatibleSchemaException
  | AccessDeniedException
  | ResourceNotFoundException
  | InvalidAttachmentException
  | SchemaAlreadyExistsException;
