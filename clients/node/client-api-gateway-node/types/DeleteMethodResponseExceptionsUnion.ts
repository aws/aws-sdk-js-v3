import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
export type DeleteMethodResponseExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException
  | ConflictException;
