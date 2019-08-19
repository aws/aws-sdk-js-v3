import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TagLimitExceededException } from "./TagLimitExceededException";
import { StaleTagException } from "./StaleTagException";
import { TagPolicyException } from "./TagPolicyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
export type TagResourceExceptionsUnion =
  | ResourceNotFoundException
  | TagLimitExceededException
  | StaleTagException
  | TagPolicyException
  | InvalidParameterException
  | AuthorizationErrorException
  | ConcurrentAccessException;
