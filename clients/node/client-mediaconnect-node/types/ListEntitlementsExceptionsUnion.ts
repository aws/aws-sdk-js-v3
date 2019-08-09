import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
export type ListEntitlementsExceptionsUnion =
  | ServiceUnavailableException
  | TooManyRequestsException
  | BadRequestException
  | InternalServerErrorException;
