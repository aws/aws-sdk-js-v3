import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteRuleExceptionsUnion =
  | ConcurrentModificationException
  | ManagedRuleException
  | InternalException
  | ResourceNotFoundException;
