import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ForbiddenException } from "./ForbiddenException";
export type ListClusterOperationsExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | UnauthorizedException
  | ForbiddenException;
