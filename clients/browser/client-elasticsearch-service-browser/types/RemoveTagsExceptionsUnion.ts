import { BaseException } from "./BaseException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
export type RemoveTagsExceptionsUnion =
  | BaseException
  | ValidationException
  | InternalException;
