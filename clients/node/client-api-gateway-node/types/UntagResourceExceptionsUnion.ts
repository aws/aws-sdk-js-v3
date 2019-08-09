import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { ConflictException } from "./ConflictException";
export type UntagResourceExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException
  | NotFoundException
  | ConflictException;
