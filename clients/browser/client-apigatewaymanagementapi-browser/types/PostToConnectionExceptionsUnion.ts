import { GoneException } from "./GoneException";
import { LimitExceededException } from "./LimitExceededException";
import { PayloadTooLargeException } from "./PayloadTooLargeException";
import { ForbiddenException } from "./ForbiddenException";
export type PostToConnectionExceptionsUnion =
  | GoneException
  | LimitExceededException
  | PayloadTooLargeException
  | ForbiddenException;
