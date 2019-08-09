import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteResourceExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | BadRequestException
  | ConflictException
  | TooManyRequestsException;
