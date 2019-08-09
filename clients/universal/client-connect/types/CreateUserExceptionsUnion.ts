import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidParameterException } from "./InvalidParameterException";
import { LimitExceededException } from "./LimitExceededException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceException } from "./InternalServiceException";
export type CreateUserExceptionsUnion =
  | InvalidRequestException
  | InvalidParameterException
  | LimitExceededException
  | DuplicateResourceException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalServiceException;
