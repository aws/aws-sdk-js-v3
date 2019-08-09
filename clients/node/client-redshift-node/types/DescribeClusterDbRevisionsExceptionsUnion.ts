import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
export type DescribeClusterDbRevisionsExceptionsUnion =
  | ClusterNotFoundFault
  | InvalidClusterStateFault;
