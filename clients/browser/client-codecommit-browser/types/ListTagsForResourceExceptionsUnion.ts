import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
import { InvalidResourceArnException } from "./InvalidResourceArnException";
export type ListTagsForResourceExceptionsUnion =
  | RepositoryDoesNotExistException
  | InvalidRepositoryNameException
  | ResourceArnRequiredException
  | InvalidResourceArnException;
