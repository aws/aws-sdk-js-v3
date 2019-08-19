import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeServiceErrorsExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
