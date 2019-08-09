import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type GetMediaForFragmentListExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ClientLimitExceededException
  | NotAuthorizedException;
