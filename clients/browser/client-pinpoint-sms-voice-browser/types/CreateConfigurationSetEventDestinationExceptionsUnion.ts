import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { AlreadyExistsException } from "./AlreadyExistsException";
export type CreateConfigurationSetEventDestinationExceptionsUnion =
  | BadRequestException
  | LimitExceededException
  | InternalServiceErrorException
  | NotFoundException
  | TooManyRequestsException
  | AlreadyExistsException;
