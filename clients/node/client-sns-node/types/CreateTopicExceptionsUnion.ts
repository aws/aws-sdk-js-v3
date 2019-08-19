import { InvalidParameterException } from "./InvalidParameterException";
import { TopicLimitExceededException } from "./TopicLimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidSecurityException } from "./InvalidSecurityException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { StaleTagException } from "./StaleTagException";
import { TagPolicyException } from "./TagPolicyException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
export type CreateTopicExceptionsUnion =
  | InvalidParameterException
  | TopicLimitExceededException
  | InternalErrorException
  | AuthorizationErrorException
  | InvalidSecurityException
  | TagLimitExceededException
  | StaleTagException
  | TagPolicyException
  | ConcurrentAccessException;
