import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
export type GetFunctionExceptionsUnion =
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException;
