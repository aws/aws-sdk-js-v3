import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeInstancesExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
