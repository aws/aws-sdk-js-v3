import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { SnapshotCopyAlreadyDisabledFault } from "./SnapshotCopyAlreadyDisabledFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
export type DisableSnapshotCopyExceptionsUnion =
  | ClusterNotFoundFault
  | SnapshotCopyAlreadyDisabledFault
  | InvalidClusterStateFault
  | UnauthorizedOperation;
