import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateEventBusExceptionsUnion =
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | InvalidStateException
  | InternalException
  | ConcurrentModificationException
  | LimitExceededException;
