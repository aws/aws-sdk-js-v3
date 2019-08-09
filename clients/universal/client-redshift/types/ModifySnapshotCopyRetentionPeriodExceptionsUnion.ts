import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { SnapshotCopyDisabledFault } from "./SnapshotCopyDisabledFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
export type ModifySnapshotCopyRetentionPeriodExceptionsUnion =
  | ClusterNotFoundFault
  | SnapshotCopyDisabledFault
  | UnauthorizedOperation
  | InvalidClusterStateFault
  | InvalidRetentionPeriodFault;
