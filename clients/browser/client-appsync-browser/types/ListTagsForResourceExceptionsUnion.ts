import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { AccessDeniedException } from "./AccessDeniedException";
export type ListTagsForResourceExceptionsUnion =
  | BadRequestException
  | NotFoundException
  | LimitExceededException
  | UnauthorizedException
  | InternalFailureException
  | AccessDeniedException;
