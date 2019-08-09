import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { TokenAlreadyExistsException } from "./TokenAlreadyExistsException";
import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
export type CreateStackExceptionsUnion =
  | LimitExceededException
  | AlreadyExistsException
  | TokenAlreadyExistsException
  | InsufficientCapabilitiesException;
