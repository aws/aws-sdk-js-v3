import { InvalidArgumentException } from "./InvalidArgumentException";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InvalidPortRangeException } from "./InvalidPortRangeException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateListenerExceptionsUnion =
  | InvalidArgumentException
  | AcceleratorNotFoundException
  | InvalidPortRangeException
  | InternalServiceErrorException
  | LimitExceededException;
