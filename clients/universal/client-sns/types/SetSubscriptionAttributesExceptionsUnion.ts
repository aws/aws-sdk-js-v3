import { InvalidParameterException } from "./InvalidParameterException";
import { FilterPolicyLimitExceededException } from "./FilterPolicyLimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
export type SetSubscriptionAttributesExceptionsUnion =
  | InvalidParameterException
  | FilterPolicyLimitExceededException
  | InternalErrorException
  | NotFoundException
  | AuthorizationErrorException;
