import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type ListFragmentsExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | ClientLimitExceededException
  | NotAuthorizedException;
