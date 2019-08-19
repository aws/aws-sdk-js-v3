import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
import { TokenAlreadyExistsException } from "./TokenAlreadyExistsException";
export type UpdateStackExceptionsUnion =
  | InsufficientCapabilitiesException
  | TokenAlreadyExistsException;
