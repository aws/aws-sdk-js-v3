import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeCommandsExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
