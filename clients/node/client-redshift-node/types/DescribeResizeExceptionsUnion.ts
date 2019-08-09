import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ResizeNotFoundFault } from "./ResizeNotFoundFault";
export type DescribeResizeExceptionsUnion =
  | ClusterNotFoundFault
  | ResizeNotFoundFault;
