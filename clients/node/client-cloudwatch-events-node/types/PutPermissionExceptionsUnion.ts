import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { PolicyLengthExceededException } from "./PolicyLengthExceededException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type PutPermissionExceptionsUnion =
  | ResourceNotFoundException
  | PolicyLengthExceededException
  | InternalException
  | ConcurrentModificationException;
