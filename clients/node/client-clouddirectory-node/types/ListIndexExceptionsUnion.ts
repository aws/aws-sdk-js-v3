import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { FacetValidationException } from "./FacetValidationException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotIndexException } from "./NotIndexException";
export type ListIndexExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | FacetValidationException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | DirectoryNotEnabledException
  | InvalidNextTokenException
  | ResourceNotFoundException
  | NotIndexException;
