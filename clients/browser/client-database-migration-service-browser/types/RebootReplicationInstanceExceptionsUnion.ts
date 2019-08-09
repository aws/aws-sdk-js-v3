import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type RebootReplicationInstanceExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
