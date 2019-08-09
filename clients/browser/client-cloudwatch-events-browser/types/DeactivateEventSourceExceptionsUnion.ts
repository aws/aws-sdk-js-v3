import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InternalException } from "./InternalException";
export type DeactivateEventSourceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidStateException
  | InternalException;
