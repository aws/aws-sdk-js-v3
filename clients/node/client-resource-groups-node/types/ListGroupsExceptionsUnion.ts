import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListGroupsExceptionsUnion =
  | BadRequestException
  | ForbiddenException
  | MethodNotAllowedException
  | TooManyRequestsException
  | InternalServerErrorException;
