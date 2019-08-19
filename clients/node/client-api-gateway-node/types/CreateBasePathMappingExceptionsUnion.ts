import { UnauthorizedException } from "./UnauthorizedException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreateBasePathMappingExceptionsUnion =
  | UnauthorizedException
  | ConflictException
  | BadRequestException
  | NotFoundException
  | TooManyRequestsException;
