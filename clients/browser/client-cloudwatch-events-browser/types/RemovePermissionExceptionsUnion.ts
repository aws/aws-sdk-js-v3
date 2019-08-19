import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type RemovePermissionExceptionsUnion =
  | ResourceNotFoundException
  | InternalException
  | ConcurrentModificationException;
