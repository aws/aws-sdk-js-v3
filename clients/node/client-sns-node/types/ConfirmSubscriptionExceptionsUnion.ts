import { SubscriptionLimitExceededException } from "./SubscriptionLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotFoundException } from "./NotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { FilterPolicyLimitExceededException } from "./FilterPolicyLimitExceededException";
export type ConfirmSubscriptionExceptionsUnion =
  | SubscriptionLimitExceededException
  | InvalidParameterException
  | NotFoundException
  | InternalErrorException
  | AuthorizationErrorException
  | FilterPolicyLimitExceededException;
