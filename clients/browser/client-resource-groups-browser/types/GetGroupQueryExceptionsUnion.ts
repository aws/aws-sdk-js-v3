import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type GetGroupQueryExceptionsUnion =
  | BadRequestException
  | ForbiddenException
  | NotFoundException
  | MethodNotAllowedException
  | TooManyRequestsException
  | InternalServerErrorException;
