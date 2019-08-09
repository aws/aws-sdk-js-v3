import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type DescribeStreamExceptionsUnion =
  | ResourceNotFoundException
  | InternalServerError;
