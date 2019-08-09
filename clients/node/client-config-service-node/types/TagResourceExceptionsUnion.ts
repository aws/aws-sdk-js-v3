import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyTagsException } from "./TooManyTagsException";
export type TagResourceExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | TooManyTagsException;
