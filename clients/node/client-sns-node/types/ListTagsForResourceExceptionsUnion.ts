import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TagPolicyException } from "./TagPolicyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
export type ListTagsForResourceExceptionsUnion =
  | ResourceNotFoundException
  | TagPolicyException
  | InvalidParameterException
  | AuthorizationErrorException
  | ConcurrentAccessException;
