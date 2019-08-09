import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetAlreadyExistsException } from "./FacetAlreadyExistsException";
import { InvalidRuleException } from "./InvalidRuleException";
import { FacetValidationException } from "./FacetValidationException";
export type CreateFacetExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | ResourceNotFoundException
  | FacetAlreadyExistsException
  | InvalidRuleException
  | FacetValidationException;
