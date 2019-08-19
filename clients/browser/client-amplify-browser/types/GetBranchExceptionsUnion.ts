import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
export type GetBranchExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | NotFoundException
  | InternalFailureException;
