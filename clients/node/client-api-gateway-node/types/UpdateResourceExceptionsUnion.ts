import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateResourceExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | ConflictException
  | BadRequestException
  | TooManyRequestsException;
