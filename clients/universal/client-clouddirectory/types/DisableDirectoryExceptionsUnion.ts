import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DirectoryDeletedException } from "./DirectoryDeletedException";
import { InternalServiceException } from "./InternalServiceException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RetryableConflictException } from "./RetryableConflictException";
import { InvalidArnException } from "./InvalidArnException";
export type DisableDirectoryExceptionsUnion =
  | ResourceNotFoundException
  | DirectoryDeletedException
  | InternalServiceException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | RetryableConflictException
  | InvalidArnException;
