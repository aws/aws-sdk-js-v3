import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ClusterOnLatestRevisionFault } from "./ClusterOnLatestRevisionFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
export type ModifyClusterDbRevisionExceptionsUnion =
  | ClusterNotFoundFault
  | ClusterOnLatestRevisionFault
  | InvalidClusterStateFault;
