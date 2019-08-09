import { AlreadyExistsException } from "./AlreadyExistsException";
import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateChangeSetExceptionsUnion =
  | AlreadyExistsException
  | InsufficientCapabilitiesException
  | LimitExceededException;
