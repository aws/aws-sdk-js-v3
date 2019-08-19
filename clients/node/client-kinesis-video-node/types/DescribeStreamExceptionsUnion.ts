import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
export type DescribeStreamExceptionsUnion =
  | InvalidArgumentException
  | ResourceNotFoundException
  | ClientLimitExceededException
  | NotAuthorizedException;
