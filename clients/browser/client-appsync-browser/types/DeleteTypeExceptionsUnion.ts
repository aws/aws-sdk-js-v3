import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type DeleteTypeExceptionsUnion =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException;
