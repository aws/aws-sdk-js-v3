import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { EndpointGroupAlreadyExistsException } from "./EndpointGroupAlreadyExistsException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateEndpointGroupExceptionsUnion =
  | AcceleratorNotFoundException
  | EndpointGroupAlreadyExistsException
  | ListenerNotFoundException
  | InternalServiceErrorException
  | InvalidArgumentException
  | LimitExceededException;
