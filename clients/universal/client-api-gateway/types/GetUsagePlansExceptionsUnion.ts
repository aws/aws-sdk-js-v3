import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { NotFoundException } from "./NotFoundException";
export type GetUsagePlansExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | TooManyRequestsException
  | ConflictException
  | NotFoundException;
