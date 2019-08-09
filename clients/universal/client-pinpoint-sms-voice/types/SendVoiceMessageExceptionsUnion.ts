import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type SendVoiceMessageExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException
  | InternalServiceErrorException;
