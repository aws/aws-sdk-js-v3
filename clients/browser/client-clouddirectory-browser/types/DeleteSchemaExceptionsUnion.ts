import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { StillContainsLinksException } from "./StillContainsLinksException";
export type DeleteSchemaExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | ResourceNotFoundException
  | StillContainsLinksException;
