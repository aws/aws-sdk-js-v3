import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteResolverExceptionsUnion =
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException;
