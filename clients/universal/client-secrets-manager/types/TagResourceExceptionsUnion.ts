import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServiceError } from "./InternalServiceError";
export type TagResourceExceptionsUnion =
  | ResourceNotFoundException
  | InvalidRequestException
  | InvalidParameterException
  | InternalServiceError;
