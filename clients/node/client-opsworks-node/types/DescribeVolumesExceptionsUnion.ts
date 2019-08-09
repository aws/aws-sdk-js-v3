import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeVolumesExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
