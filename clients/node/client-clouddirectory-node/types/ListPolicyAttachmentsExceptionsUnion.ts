import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotPolicyException } from "./NotPolicyException";
export type ListPolicyAttachmentsExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InvalidNextTokenException
  | ResourceNotFoundException
  | NotPolicyException;
