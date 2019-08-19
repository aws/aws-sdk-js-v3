import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
export type DescribeEventSourceExceptionsUnion =
  | ResourceNotFoundException
  | InternalException;
