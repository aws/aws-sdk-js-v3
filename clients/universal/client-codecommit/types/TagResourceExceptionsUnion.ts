import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
import { InvalidResourceArnException } from "./InvalidResourceArnException";
import { TagsMapRequiredException } from "./TagsMapRequiredException";
import { InvalidTagsMapException } from "./InvalidTagsMapException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidSystemTagUsageException } from "./InvalidSystemTagUsageException";
import { TagPolicyException } from "./TagPolicyException";
export type TagResourceExceptionsUnion =
  | RepositoryDoesNotExistException
  | InvalidRepositoryNameException
  | ResourceArnRequiredException
  | InvalidResourceArnException
  | TagsMapRequiredException
  | InvalidTagsMapException
  | TooManyTagsException
  | InvalidSystemTagUsageException
  | TagPolicyException;
