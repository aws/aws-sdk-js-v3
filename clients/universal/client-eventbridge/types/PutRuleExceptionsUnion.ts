import { InvalidEventPatternException } from "./InvalidEventPatternException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ManagedRuleException } from "./ManagedRuleException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type PutRuleExceptionsUnion =
  | InvalidEventPatternException
  | LimitExceededException
  | ConcurrentModificationException
  | ManagedRuleException
  | InternalException
  | ResourceNotFoundException;
