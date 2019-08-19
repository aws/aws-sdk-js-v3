import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
export type RefreshSchemasExceptionsUnion =
  | InvalidResourceStateFault
  | ResourceNotFoundFault
  | KMSKeyNotAccessibleFault
  | ResourceQuotaExceededFault;
