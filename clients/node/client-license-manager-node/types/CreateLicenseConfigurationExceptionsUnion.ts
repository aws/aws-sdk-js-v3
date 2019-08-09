import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
export type CreateLicenseConfigurationExceptionsUnion =
  | InvalidParameterValueException
  | ServerInternalException
  | ResourceLimitExceededException
  | AuthorizationException
  | AccessDeniedException
  | RateLimitExceededException;
