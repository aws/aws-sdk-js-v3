import { EventSubscriptionQuotaExceededFault } from "./EventSubscriptionQuotaExceededFault";
import { SubscriptionAlreadyExistFault } from "./SubscriptionAlreadyExistFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./SNSTopicArnNotFoundFault";
import { SubscriptionEventIdNotFoundFault } from "./SubscriptionEventIdNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "./SubscriptionCategoryNotFoundFault";
import { SubscriptionSeverityNotFoundFault } from "./SubscriptionSeverityNotFoundFault";
import { SourceNotFoundFault } from "./SourceNotFoundFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type CreateEventSubscriptionExceptionsUnion =
  | EventSubscriptionQuotaExceededFault
  | SubscriptionAlreadyExistFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SubscriptionEventIdNotFoundFault
  | SubscriptionCategoryNotFoundFault
  | SubscriptionSeverityNotFoundFault
  | SourceNotFoundFault
  | TagLimitExceededFault
  | InvalidTagFault;
