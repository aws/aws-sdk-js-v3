import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ApiLimitExceededException } from "./ApiLimitExceededException";
export type CreateGraphqlApiExceptionsUnion =
  | BadRequestException
  | LimitExceededException
  | ConcurrentModificationException
  | UnauthorizedException
  | InternalFailureException
  | ApiLimitExceededException;
