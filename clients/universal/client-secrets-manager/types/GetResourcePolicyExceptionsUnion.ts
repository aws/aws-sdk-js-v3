import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceError } from "./InternalServiceError";
import { InvalidRequestException } from "./InvalidRequestException";
export type GetResourcePolicyExceptionsUnion =
  | ResourceNotFoundException
  | InternalServiceError
  | InvalidRequestException;
