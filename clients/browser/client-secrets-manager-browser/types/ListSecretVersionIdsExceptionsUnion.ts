import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
export type ListSecretVersionIdsExceptionsUnion =
  | InvalidNextTokenException
  | ResourceNotFoundException
  | InternalServiceError;
