import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type DeregisterStreamConsumerExceptionsUnion =
  | LimitExceededException
  | ResourceNotFoundException
  | InvalidArgumentException;
