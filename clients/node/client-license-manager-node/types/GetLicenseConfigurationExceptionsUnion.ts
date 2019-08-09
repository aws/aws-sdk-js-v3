import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
export type GetLicenseConfigurationExceptionsUnion =
  | InvalidParameterValueException
  | ServerInternalException
  | AuthorizationException
  | AccessDeniedException
  | RateLimitExceededException;
