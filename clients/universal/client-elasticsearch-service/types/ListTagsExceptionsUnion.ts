import { BaseException } from "./BaseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
export type ListTagsExceptionsUnion =
  | BaseException
  | ResourceNotFoundException
  | ValidationException
  | InternalException;
