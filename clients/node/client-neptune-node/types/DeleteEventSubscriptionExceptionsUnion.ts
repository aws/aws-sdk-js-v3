import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { InvalidEventSubscriptionStateFault } from "./InvalidEventSubscriptionStateFault";
export type DeleteEventSubscriptionExceptionsUnion =
  | SubscriptionNotFoundFault
  | InvalidEventSubscriptionStateFault;
