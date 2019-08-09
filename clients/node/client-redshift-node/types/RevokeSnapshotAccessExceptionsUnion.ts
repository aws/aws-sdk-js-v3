import { AccessToSnapshotDeniedFault } from "./AccessToSnapshotDeniedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
export type RevokeSnapshotAccessExceptionsUnion =
  | AccessToSnapshotDeniedFault
  | AuthorizationNotFoundFault
  | ClusterSnapshotNotFoundFault;
