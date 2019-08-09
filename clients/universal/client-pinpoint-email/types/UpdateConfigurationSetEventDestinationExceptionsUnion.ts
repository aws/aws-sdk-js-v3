import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type UpdateConfigurationSetEventDestinationExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException
  | BadRequestException;
