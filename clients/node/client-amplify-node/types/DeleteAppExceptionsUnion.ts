import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { DependentServiceFailureException } from "./DependentServiceFailureException";
export type DeleteAppExceptionsUnion =
  | BadRequestException
  | NotFoundException
  | UnauthorizedException
  | InternalFailureException
  | DependentServiceFailureException;
