import { SubscriptionLimitExceededException } from "./SubscriptionLimitExceededException";
import { FilterPolicyLimitExceededException } from "./FilterPolicyLimitExceededException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { NotFoundException } from "./NotFoundException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { InvalidSecurityException } from "./InvalidSecurityException";
export type SubscribeExceptionsUnion =
  | SubscriptionLimitExceededException
  | FilterPolicyLimitExceededException
  | InvalidParameterException
  | InternalErrorException
  | NotFoundException
  | AuthorizationErrorException
  | InvalidSecurityException;
