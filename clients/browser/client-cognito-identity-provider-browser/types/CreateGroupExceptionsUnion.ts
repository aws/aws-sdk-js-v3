import { InvalidParameterException } from "./InvalidParameterException";
import { GroupExistsException } from "./GroupExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
export type CreateGroupExceptionsUnion =
  | InvalidParameterException
  | GroupExistsException
  | ResourceNotFoundException
  | TooManyRequestsException
  | LimitExceededException
  | NotAuthorizedException
  | InternalErrorException;
