import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateRestApiExceptionsUnion =
  | UnauthorizedException
  | LimitExceededException
  | BadRequestException
  | TooManyRequestsException;
