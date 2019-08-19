import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type DeleteConfigurationSetEventDestinationExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException
  | InternalServiceErrorException;
