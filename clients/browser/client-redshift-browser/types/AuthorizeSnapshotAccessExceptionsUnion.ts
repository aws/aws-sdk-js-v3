import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "./AuthorizationQuotaExceededFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { LimitExceededFault } from "./LimitExceededFault";
export type AuthorizeSnapshotAccessExceptionsUnion =
  | ClusterSnapshotNotFoundFault
  | AuthorizationAlreadyExistsFault
  | AuthorizationQuotaExceededFault
  | DependentServiceRequestThrottlingFault
  | InvalidClusterSnapshotStateFault
  | LimitExceededFault;
