import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type UpdateFlowEntitlementExceptionsUnion =
  | BadRequestException
  | InternalServerErrorException
  | ForbiddenException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException;
