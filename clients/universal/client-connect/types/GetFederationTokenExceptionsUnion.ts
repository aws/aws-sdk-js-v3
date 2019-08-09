import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { DuplicateResourceException } from "./DuplicateResourceException";
export type GetFederationTokenExceptionsUnion =
  | InvalidRequestException
  | InvalidParameterException
  | ResourceNotFoundException
  | UserNotFoundException
  | InternalServiceException
  | DuplicateResourceException;
