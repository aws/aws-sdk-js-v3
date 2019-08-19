import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InternalServiceError } from "./InternalServiceError";
export type ListSecretsExceptionsUnion =
  | InvalidParameterException
  | InvalidNextTokenException
  | InternalServiceError;
