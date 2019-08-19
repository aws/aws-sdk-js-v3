import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
export type GetBulkPublishDetailsExceptionsUnion =
  | NotAuthorizedException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalErrorException;
