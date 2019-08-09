import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ResizeNotFoundFault } from "./ResizeNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
export type CancelResizeExceptionsUnion =
  | ClusterNotFoundFault
  | ResizeNotFoundFault
  | InvalidClusterStateFault
  | UnsupportedOperationFault;
