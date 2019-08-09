import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribePermissionsExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
