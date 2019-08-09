import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateDomainExceptionsUnion =
  | BaseException
  | InternalException
  | LimitExceededException;
