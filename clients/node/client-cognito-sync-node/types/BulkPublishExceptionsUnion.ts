import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { DuplicateRequestException } from "./DuplicateRequestException";
import { AlreadyStreamedException } from "./AlreadyStreamedException";
export type BulkPublishExceptionsUnion =
  | NotAuthorizedException
  | InvalidParameterException
  | ResourceNotFoundException
  | InternalErrorException
  | DuplicateRequestException
  | AlreadyStreamedException;
