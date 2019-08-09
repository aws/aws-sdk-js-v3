import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type ListBranchesExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | InternalFailureException;
