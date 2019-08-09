import { NotFoundException } from "./NotFoundException";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
export type CreateConfigurationSetEventDestinationExceptionsUnion =
  | NotFoundException
  | AlreadyExistsException
  | LimitExceededException
  | TooManyRequestsException
  | BadRequestException;
