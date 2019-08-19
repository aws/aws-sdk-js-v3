import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { FilterLimitExceededException } from "./FilterLimitExceededException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
export type ListAssociationsForLicenseConfigurationExceptionsUnion =
  | InvalidParameterValueException
  | FilterLimitExceededException
  | ServerInternalException
  | AuthorizationException
  | AccessDeniedException
  | RateLimitExceededException;
