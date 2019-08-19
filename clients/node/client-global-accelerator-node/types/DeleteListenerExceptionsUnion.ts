import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { AssociatedEndpointGroupFoundException } from "./AssociatedEndpointGroupFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type DeleteListenerExceptionsUnion =
  | ListenerNotFoundException
  | AssociatedEndpointGroupFoundException
  | InternalServiceErrorException;
