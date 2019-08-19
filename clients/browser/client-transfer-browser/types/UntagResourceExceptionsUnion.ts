import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type UntagResourceExceptionsUnion =
  | ServiceUnavailableException
  | InternalServiceError
  | InvalidRequestException;
