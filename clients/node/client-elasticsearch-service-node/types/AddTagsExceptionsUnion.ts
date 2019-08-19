import { BaseException } from "./BaseException";
import { LimitExceededException } from "./LimitExceededException";
import { ValidationException } from "./ValidationException";
import { InternalException } from "./InternalException";
export type AddTagsExceptionsUnion =
  | BaseException
  | LimitExceededException
  | ValidationException
  | InternalException;
