import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
export type UntagResourceExceptionsUnion =
  | ResourceNotFoundException
  | InternalException
  | ConcurrentModificationException
  | ManagedRuleException;
