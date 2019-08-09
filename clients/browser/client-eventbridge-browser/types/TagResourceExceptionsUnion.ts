import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InternalException } from "./InternalException";
import { ManagedRuleException } from "./ManagedRuleException";
export type TagResourceExceptionsUnion =
  | ResourceNotFoundException
  | ConcurrentModificationException
  | InternalException
  | ManagedRuleException;
