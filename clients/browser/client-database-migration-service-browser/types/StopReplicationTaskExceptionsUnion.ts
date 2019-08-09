import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type StopReplicationTaskExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
