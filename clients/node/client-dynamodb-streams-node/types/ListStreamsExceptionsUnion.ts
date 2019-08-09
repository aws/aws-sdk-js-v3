import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerError } from "./InternalServerError";
export type ListStreamsExceptionsUnion =
  | ResourceNotFoundException
  | InternalServerError;
