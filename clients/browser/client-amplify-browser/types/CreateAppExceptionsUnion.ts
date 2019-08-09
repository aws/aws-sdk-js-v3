import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
export type CreateAppExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | InternalFailureException
  | LimitExceededException
  | DependentServiceFailureException;
