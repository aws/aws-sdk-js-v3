import { TableRestoreNotFoundFault } from "./TableRestoreNotFoundFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
export type DescribeTableRestoreStatusExceptionsUnion =
  | TableRestoreNotFoundFault
  | ClusterNotFoundFault;
