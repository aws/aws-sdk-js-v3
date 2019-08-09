import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalServerException } from "./InternalServerException";
export type DescribeComponentExceptionsUnion =
  | ResourceNotFoundException
  | ValidationException
  | InternalServerException;
