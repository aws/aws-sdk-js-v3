import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidTagsException } from "./InvalidTagsException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateCustomActionTypeExceptionsUnion =
  | ValidationException
  | LimitExceededException
  | TooManyTagsException
  | InvalidTagsException
  | ConcurrentModificationException;
