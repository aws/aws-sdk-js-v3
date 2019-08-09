import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type ModifyReplicationTaskExceptionsUnion =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | ResourceAlreadyExistsFault
  | KMSKeyNotAccessibleFault;
