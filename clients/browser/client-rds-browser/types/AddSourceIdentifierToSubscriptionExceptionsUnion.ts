import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { SourceNotFoundFault } from "./SourceNotFoundFault";
export type AddSourceIdentifierToSubscriptionExceptionsUnion =
  | SubscriptionNotFoundFault
  | SourceNotFoundFault;
