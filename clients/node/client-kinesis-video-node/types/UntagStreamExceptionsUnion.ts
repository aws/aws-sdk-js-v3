import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidResourceFormatException } from "./InvalidResourceFormatException";
export type UntagStreamExceptionsUnion =
  | ClientLimitExceededException
  | InvalidArgumentException
  | ResourceNotFoundException
  | NotAuthorizedException
  | InvalidResourceFormatException;
