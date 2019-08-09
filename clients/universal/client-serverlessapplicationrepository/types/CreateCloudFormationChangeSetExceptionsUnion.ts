import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
export type CreateCloudFormationChangeSetExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException;
