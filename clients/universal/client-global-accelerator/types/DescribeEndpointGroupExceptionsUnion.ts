import { EndpointGroupNotFoundException } from "./EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type DescribeEndpointGroupExceptionsUnion =
  | EndpointGroupNotFoundException
  | InternalServiceErrorException;
