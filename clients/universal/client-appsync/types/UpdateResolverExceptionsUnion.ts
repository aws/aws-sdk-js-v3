import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type UpdateResolverExceptionsUnion =
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException;
