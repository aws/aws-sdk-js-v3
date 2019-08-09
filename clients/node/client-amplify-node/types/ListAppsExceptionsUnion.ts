import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
export type ListAppsExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | InternalFailureException;
