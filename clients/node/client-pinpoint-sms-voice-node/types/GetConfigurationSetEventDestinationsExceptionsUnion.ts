import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type GetConfigurationSetEventDestinationsExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException
  | InternalServiceErrorException;
