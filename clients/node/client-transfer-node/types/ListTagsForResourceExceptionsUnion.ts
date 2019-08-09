import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidRequestException } from "./InvalidRequestException";
export type ListTagsForResourceExceptionsUnion =
  | ServiceUnavailableException
  | InternalServiceError
  | InvalidNextTokenException
  | InvalidRequestException;
