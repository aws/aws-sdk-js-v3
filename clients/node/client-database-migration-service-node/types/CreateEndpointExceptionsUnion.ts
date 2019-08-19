import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { AccessDeniedFault } from "./AccessDeniedFault";
export type CreateEndpointExceptionsUnion =
  | KMSKeyNotAccessibleFault
  | ResourceAlreadyExistsFault
  | ResourceQuotaExceededFault
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | AccessDeniedFault;
