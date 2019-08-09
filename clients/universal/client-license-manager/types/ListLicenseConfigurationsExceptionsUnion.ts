import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { FilterLimitExceededException } from "./FilterLimitExceededException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
export type ListLicenseConfigurationsExceptionsUnion =
  | InvalidParameterValueException
  | ServerInternalException
  | FilterLimitExceededException
  | AuthorizationException
  | AccessDeniedException
  | RateLimitExceededException;
