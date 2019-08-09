import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
export type CreateWebhookExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | NotFoundException
  | InternalFailureException
  | LimitExceededException
  | DependentServiceFailureException;
