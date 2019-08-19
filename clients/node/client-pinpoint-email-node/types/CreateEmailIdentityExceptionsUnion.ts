import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
export type CreateEmailIdentityExceptionsUnion =
  | LimitExceededException
  | TooManyRequestsException
  | BadRequestException
  | ConcurrentModificationException;
