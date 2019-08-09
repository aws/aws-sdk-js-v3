import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type DeleteEventSubscriptionExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
