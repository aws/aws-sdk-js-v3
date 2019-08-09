import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DirectoryNotDisabledException } from "./DirectoryNotDisabledException";
import { InternalServiceException } from "./InternalServiceException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryDeletedException } from "./DirectoryDeletedException";
import { RetryableConflictException } from "./RetryableConflictException";
import { InvalidArnException } from "./InvalidArnException";
export type DeleteDirectoryExceptionsUnion =
  | ResourceNotFoundException
  | DirectoryNotDisabledException
  | InternalServiceException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | DirectoryDeletedException
  | RetryableConflictException
  | InvalidArnException;
