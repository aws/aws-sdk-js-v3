import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
export type DeleteReplicationInstanceExceptionsUnion =
  | InvalidResourceStateFault
  | ResourceNotFoundFault;
