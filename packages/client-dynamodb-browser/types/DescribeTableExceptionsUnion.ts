import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type DescribeTableExceptionsUnion =
  | ResourceNotFoundException
  | InternalServerError;
