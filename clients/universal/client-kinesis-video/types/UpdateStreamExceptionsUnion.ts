import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceInUseException } from "./ResourceInUseException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { VersionMismatchException } from "./VersionMismatchException";
export type UpdateStreamExceptionsUnion =
  | ClientLimitExceededException
  | InvalidArgumentException
  | ResourceNotFoundException
  | ResourceInUseException
  | NotAuthorizedException
  | VersionMismatchException;
