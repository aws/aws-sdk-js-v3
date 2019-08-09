import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { NumberOfNodesQuotaExceededFault } from "./NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "./NumberOfNodesPerClusterLimitExceededFault";
import { InsufficientClusterCapacityFault } from "./InsufficientClusterCapacityFault";
import { UnsupportedOptionFault } from "./UnsupportedOptionFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { LimitExceededFault } from "./LimitExceededFault";
export type ResizeClusterExceptionsUnion =
  | InvalidClusterStateFault
  | ClusterNotFoundFault
  | NumberOfNodesQuotaExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | InsufficientClusterCapacityFault
  | UnsupportedOptionFault
  | UnsupportedOperationFault
  | UnauthorizedOperation
  | LimitExceededFault;
