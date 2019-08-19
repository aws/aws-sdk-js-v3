import { InvalidArgumentException } from "./InvalidArgumentException";
import { EndpointGroupNotFoundException } from "./EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
export type UpdateEndpointGroupExceptionsUnion =
  | InvalidArgumentException
  | EndpointGroupNotFoundException
  | InternalServiceErrorException
  | LimitExceededException;
