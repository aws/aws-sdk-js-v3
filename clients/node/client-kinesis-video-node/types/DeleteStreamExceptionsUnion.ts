import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { VersionMismatchException } from "./VersionMismatchException";
export type DeleteStreamExceptionsUnion =
  | ClientLimitExceededException
  | InvalidArgumentException
  | ResourceNotFoundException
  | NotAuthorizedException
  | VersionMismatchException;
