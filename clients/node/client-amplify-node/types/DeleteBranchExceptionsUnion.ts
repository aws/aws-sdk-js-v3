import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
export type DeleteBranchExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | NotFoundException
  | InternalFailureException
  | DependentServiceFailureException;
