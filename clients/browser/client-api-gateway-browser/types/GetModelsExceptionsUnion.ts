import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetModelsExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | NotFoundException
  | TooManyRequestsException;
