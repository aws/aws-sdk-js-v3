import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InternalException } from "./InternalException";
export type ActivateEventSourceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidStateException
  | InternalException;
