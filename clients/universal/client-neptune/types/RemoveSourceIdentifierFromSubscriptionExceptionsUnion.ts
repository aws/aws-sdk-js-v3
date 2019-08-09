import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { SourceNotFoundFault } from "./SourceNotFoundFault";
export type RemoveSourceIdentifierFromSubscriptionExceptionsUnion =
  | SubscriptionNotFoundFault
  | SourceNotFoundFault;
