import { UnauthorizedException } from "./UnauthorizedException";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type SearchResourcesExceptionsUnion =
  | UnauthorizedException
  | BadRequestException
  | ForbiddenException
  | MethodNotAllowedException
  | TooManyRequestsException
  | InternalServerErrorException;
