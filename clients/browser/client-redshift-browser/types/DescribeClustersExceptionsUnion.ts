import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeClustersExceptionsUnion =
  | ClusterNotFoundFault
  | InvalidTagFault;
