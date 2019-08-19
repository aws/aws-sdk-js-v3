import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { StaleTagException } from "./StaleTagException";
import { TagPolicyException } from "./TagPolicyException";
import { ConcurrentAccessException } from "./ConcurrentAccessException";
export type DeleteTopicExceptionsUnion =
  | InvalidParameterException
  | InternalErrorException
  | AuthorizationErrorException
  | NotFoundException
  | StaleTagException
  | TagPolicyException
  | ConcurrentAccessException;
