import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { AccessDeniedFault } from "./AccessDeniedFault";
export type StartReplicationTaskExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault
  | AccessDeniedFault;
