import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBClusterBacktrackNotFoundFault } from "./DBClusterBacktrackNotFoundFault";
export type DescribeDBClusterBacktracksExceptionsUnion =
  | DBClusterNotFoundFault
  | DBClusterBacktrackNotFoundFault;
