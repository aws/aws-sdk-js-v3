import { EventSubscriptionQuotaExceededFault } from "./EventSubscriptionQuotaExceededFault";
import { SubscriptionAlreadyExistFault } from "./SubscriptionAlreadyExistFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./SNSTopicArnNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "./SubscriptionCategoryNotFoundFault";
import { SourceNotFoundFault } from "./SourceNotFoundFault";
export type CreateEventSubscriptionExceptionsUnion =
  | EventSubscriptionQuotaExceededFault
  | SubscriptionAlreadyExistFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SubscriptionCategoryNotFoundFault
  | SourceNotFoundFault;
