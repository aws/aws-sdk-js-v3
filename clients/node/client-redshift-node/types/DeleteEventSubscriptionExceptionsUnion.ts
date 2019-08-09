import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { InvalidSubscriptionStateFault } from "./InvalidSubscriptionStateFault";
export type DeleteEventSubscriptionExceptionsUnion =
  | SubscriptionNotFoundFault
  | InvalidSubscriptionStateFault;
