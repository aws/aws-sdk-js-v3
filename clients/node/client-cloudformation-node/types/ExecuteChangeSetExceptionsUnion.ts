import { InvalidChangeSetStatusException } from "./InvalidChangeSetStatusException";
import { ChangeSetNotFoundException } from "./ChangeSetNotFoundException";
import { InsufficientCapabilitiesException } from "./InsufficientCapabilitiesException";
import { TokenAlreadyExistsException } from "./TokenAlreadyExistsException";
export type ExecuteChangeSetExceptionsUnion =
  | InvalidChangeSetStatusException
  | ChangeSetNotFoundException
  | InsufficientCapabilitiesException
  | TokenAlreadyExistsException;
