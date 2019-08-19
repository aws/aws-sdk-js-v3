import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeEventSubscriptionsExceptionsUnion =
  | SubscriptionNotFoundFault
  | InvalidTagFault;
