import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ForbiddenException } from "./ForbiddenException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
export type CreateClusterExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | UnauthorizedException
  | ForbiddenException
  | ServiceUnavailableException
  | TooManyRequestsException
  | ConflictException;
