import { GlobalClusterAlreadyExistsFault } from "./GlobalClusterAlreadyExistsFault";
import { GlobalClusterQuotaExceededFault } from "./GlobalClusterQuotaExceededFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
export type CreateGlobalClusterExceptionsUnion =
  | GlobalClusterAlreadyExistsFault
  | GlobalClusterQuotaExceededFault
  | InvalidDBClusterStateFault
  | DBClusterNotFoundFault;
