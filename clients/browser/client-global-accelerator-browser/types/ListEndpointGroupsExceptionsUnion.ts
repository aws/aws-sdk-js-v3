import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListEndpointGroupsExceptionsUnion =
  | ListenerNotFoundException
  | InvalidNextTokenException
  | InvalidArgumentException
  | InternalServiceErrorException;
