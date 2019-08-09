import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { DirectoryNotEnabledException } from "./DirectoryNotEnabledException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetValidationException } from "./FacetValidationException";
import { LinkNameAlreadyInUseException } from "./LinkNameAlreadyInUseException";
import { UnsupportedIndexTypeException } from "./UnsupportedIndexTypeException";
export type CreateIndexExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | DirectoryNotEnabledException
  | ResourceNotFoundException
  | FacetValidationException
  | LinkNameAlreadyInUseException
  | UnsupportedIndexTypeException;
