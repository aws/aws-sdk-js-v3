import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { FilterLimitExceededException } from "./FilterLimitExceededException";
import { FailedDependencyException } from "./FailedDependencyException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
export type ListResourceInventoryExceptionsUnion =
  | InvalidParameterValueException
  | ServerInternalException
  | FilterLimitExceededException
  | FailedDependencyException
  | AuthorizationException
  | AccessDeniedException
  | RateLimitExceededException;
