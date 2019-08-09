import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type DeleteStageExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException;
