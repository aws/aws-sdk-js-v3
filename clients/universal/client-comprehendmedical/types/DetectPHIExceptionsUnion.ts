import { InternalServerException } from "./InternalServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidEncodingException } from "./InvalidEncodingException";
import { TextSizeLimitExceededException } from "./TextSizeLimitExceededException";
export type DetectPHIExceptionsUnion =
  | InternalServerException
  | ServiceUnavailableException
  | TooManyRequestsException
  | InvalidRequestException
  | InvalidEncodingException
  | TextSizeLimitExceededException;
