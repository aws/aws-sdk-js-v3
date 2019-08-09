import { EndpointGroupNotFoundException } from "./EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type DeleteEndpointGroupExceptionsUnion =
  | EndpointGroupNotFoundException
  | InternalServiceErrorException;
