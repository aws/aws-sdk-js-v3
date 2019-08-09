import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceError } from "./InternalServiceError";
export type GetRandomPasswordExceptionsUnion =
  | InvalidParameterException
  | InvalidRequestException
  | InternalServiceError;
