import { ClientLimitExceededException } from "./ClientLimitExceededException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InvalidResourceFormatException } from "./InvalidResourceFormatException";
import { TagsPerResourceExceededLimitException } from "./TagsPerResourceExceededLimitException";
export type TagStreamExceptionsUnion =
  | ClientLimitExceededException
  | InvalidArgumentException
  | ResourceNotFoundException
  | NotAuthorizedException
  | InvalidResourceFormatException
  | TagsPerResourceExceededLimitException;
