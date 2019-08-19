import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceConflictException } from "./ResourceConflictException";
import { AccessDeniedException } from "./AccessDeniedException";
export type EnableSecurityHubExceptionsUnion =
  | InternalException
  | LimitExceededException
  | InvalidAccessException
  | ResourceConflictException
  | AccessDeniedException;
