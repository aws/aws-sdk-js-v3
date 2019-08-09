import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
export type DeleteGraphqlApiExceptionsUnion =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException
  | AccessDeniedException;
