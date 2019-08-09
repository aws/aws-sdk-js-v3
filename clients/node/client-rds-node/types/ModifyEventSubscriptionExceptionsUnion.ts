import { EventSubscriptionQuotaExceededFault } from "./EventSubscriptionQuotaExceededFault";
import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./SNSTopicArnNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "./SubscriptionCategoryNotFoundFault";
export type ModifyEventSubscriptionExceptionsUnion =
  | EventSubscriptionQuotaExceededFault
  | SubscriptionNotFoundFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SubscriptionCategoryNotFoundFault;
