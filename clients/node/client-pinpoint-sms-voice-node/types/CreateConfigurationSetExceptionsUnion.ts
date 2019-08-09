import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { AlreadyExistsException } from "./AlreadyExistsException";
export type CreateConfigurationSetExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException
  | LimitExceededException
  | InternalServiceErrorException
  | AlreadyExistsException;
