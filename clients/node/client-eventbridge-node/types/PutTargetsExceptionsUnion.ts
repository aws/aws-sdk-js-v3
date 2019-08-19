import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
export type PutTargetsExceptionsUnion =
  | ResourceNotFoundException
  | ConcurrentModificationException
  | LimitExceededException
  | ManagedRuleException
  | InternalException;
