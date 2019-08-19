import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type GetModelTemplateExceptionsUnion =
  | UnauthorizedException
  | NotFoundException
  | BadRequestException
  | TooManyRequestsException;
