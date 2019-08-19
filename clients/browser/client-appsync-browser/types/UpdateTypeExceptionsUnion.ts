import { BadRequestException } from "./BadRequestException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type UpdateTypeExceptionsUnion =
  | BadRequestException
  | ConcurrentModificationException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException;
