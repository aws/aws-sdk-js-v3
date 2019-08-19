import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { SNSInvalidTopicFault } from "./SNSInvalidTopicFault";
import { SNSNoAuthorizationFault } from "./SNSNoAuthorizationFault";
import { SNSTopicArnNotFoundFault } from "./SNSTopicArnNotFoundFault";
import { SubscriptionEventIdNotFoundFault } from "./SubscriptionEventIdNotFoundFault";
import { SubscriptionCategoryNotFoundFault } from "./SubscriptionCategoryNotFoundFault";
import { SubscriptionSeverityNotFoundFault } from "./SubscriptionSeverityNotFoundFault";
import { SourceNotFoundFault } from "./SourceNotFoundFault";
import { InvalidSubscriptionStateFault } from "./InvalidSubscriptionStateFault";
export type ModifyEventSubscriptionExceptionsUnion =
  | SubscriptionNotFoundFault
  | SNSInvalidTopicFault
  | SNSNoAuthorizationFault
  | SNSTopicArnNotFoundFault
  | SubscriptionEventIdNotFoundFault
  | SubscriptionCategoryNotFoundFault
  | SubscriptionSeverityNotFoundFault
  | SourceNotFoundFault
  | InvalidSubscriptionStateFault;
