import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceError } from "./InternalServiceError";
export type RestoreSecretExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParameterException
  | InvalidRequestException
  | InternalServiceError;
