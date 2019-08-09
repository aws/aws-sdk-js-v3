import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeStacksExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
