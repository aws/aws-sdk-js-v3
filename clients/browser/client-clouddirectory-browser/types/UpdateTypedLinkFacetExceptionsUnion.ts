import { InternalServiceException } from "./InternalServiceException";
import { InvalidArnException } from "./InvalidArnException";
import { RetryableConflictException } from "./RetryableConflictException";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { AccessDeniedException } from "./AccessDeniedException";
import { FacetValidationException } from "./FacetValidationException";
import { InvalidFacetUpdateException } from "./InvalidFacetUpdateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { FacetNotFoundException } from "./FacetNotFoundException";
import { InvalidRuleException } from "./InvalidRuleException";
export type UpdateTypedLinkFacetExceptionsUnion =
  | InternalServiceException
  | InvalidArnException
  | RetryableConflictException
  | ValidationException
  | LimitExceededException
  | AccessDeniedException
  | FacetValidationException
  | InvalidFacetUpdateException
  | ResourceNotFoundException
  | FacetNotFoundException
  | InvalidRuleException;
