import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
export type TestConnectionExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault
  | KMSKeyNotAccessibleFault
  | ResourceQuotaExceededFault;
