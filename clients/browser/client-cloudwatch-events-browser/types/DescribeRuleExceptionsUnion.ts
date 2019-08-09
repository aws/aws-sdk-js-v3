import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
export type DescribeRuleExceptionsUnion =
  | ResourceNotFoundException
  | InternalException;
