import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidPortRangeException } from "./InvalidPortRangeException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
export type UpdateListenerExceptionsUnion =
  | InvalidArgumentException
  | InvalidPortRangeException
  | ListenerNotFoundException
  | InternalServiceErrorException
  | LimitExceededException;
