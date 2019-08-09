import { RepositoryDoesNotExistException } from "./RepositoryDoesNotExistException";
import { InvalidRepositoryNameException } from "./InvalidRepositoryNameException";
import { ResourceArnRequiredException } from "./ResourceArnRequiredException";
import { InvalidResourceArnException } from "./InvalidResourceArnException";
import { TagKeysListRequiredException } from "./TagKeysListRequiredException";
import { InvalidTagKeysListException } from "./InvalidTagKeysListException";
import { TooManyTagsException } from "./TooManyTagsException";
import { InvalidSystemTagUsageException } from "./InvalidSystemTagUsageException";
import { TagPolicyException } from "./TagPolicyException";
export type UntagResourceExceptionsUnion =
  | RepositoryDoesNotExistException
  | InvalidRepositoryNameException
  | ResourceArnRequiredException
  | InvalidResourceArnException
  | TagKeysListRequiredException
  | InvalidTagKeysListException
  | TooManyTagsException
  | InvalidSystemTagUsageException
  | TagPolicyException;
