import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidFacetUpdateException } from "./InvalidFacetUpdateException";
import { FacetValidationException } from "./FacetValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { InvalidRuleException } from "./InvalidRuleException";
export type UpdateFacetExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | InvalidFacetUpdateException
  | FacetValidationException
  | ResourceNotFoundException
  | FacetNotFoundException
  | InvalidRuleException;
