import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeLayersExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
