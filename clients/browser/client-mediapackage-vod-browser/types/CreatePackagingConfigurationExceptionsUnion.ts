import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type CreatePackagingConfigurationExceptionsUnion =
  | UnprocessableEntityException
  | InternalServerErrorException
  | ForbiddenException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException;
