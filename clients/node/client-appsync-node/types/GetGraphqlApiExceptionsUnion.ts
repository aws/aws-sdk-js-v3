import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
export type GetGraphqlApiExceptionsUnion =
  | BadRequestException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException
  | AccessDeniedException;
