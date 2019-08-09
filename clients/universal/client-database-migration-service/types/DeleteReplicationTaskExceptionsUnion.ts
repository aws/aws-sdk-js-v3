import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type DeleteReplicationTaskExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
