import { InvalidArgumentException } from "./InvalidArgumentException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type DescribeListenerExceptionsUnion =
  | InvalidArgumentException
  | ListenerNotFoundException
  | InternalServiceErrorException;
