import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { LicenseUsageException } from "./LicenseUsageException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
export type UpdateLicenseSpecificationsForResourceExceptionsUnion =
  | InvalidParameterValueException
  | InvalidResourceStateException
  | LicenseUsageException
  | ServerInternalException
  | AuthorizationException
  | AccessDeniedException
  | RateLimitExceededException;
