import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DisableSecurityHubExceptionsUnion =
  | InternalException
  | LimitExceededException
  | InvalidAccessException
  | ResourceNotFoundException;
