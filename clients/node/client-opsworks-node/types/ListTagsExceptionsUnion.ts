import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ListTagsExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException;
