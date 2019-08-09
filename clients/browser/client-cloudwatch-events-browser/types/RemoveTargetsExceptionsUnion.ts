import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
export type RemoveTargetsExceptionsUnion =
  | ResourceNotFoundException
  | ConcurrentModificationException
  | ManagedRuleException
  | InternalException;
