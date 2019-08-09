import { AccessDeniedFault } from "./AccessDeniedFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
export type CreateReplicationTaskExceptionsUnion =
  | AccessDeniedFault
  | InvalidResourceStateFault
  | ResourceAlreadyExistsFault
  | ResourceNotFoundFault
  | KMSKeyNotAccessibleFault
  | ResourceQuotaExceededFault;
