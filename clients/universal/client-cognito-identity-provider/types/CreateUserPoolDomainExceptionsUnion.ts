import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
export type CreateUserPoolDomainExceptionsUnion =
  | InvalidParameterException
  | NotAuthorizedException
  | ResourceNotFoundException
  | LimitExceededException
  | InternalErrorException;
