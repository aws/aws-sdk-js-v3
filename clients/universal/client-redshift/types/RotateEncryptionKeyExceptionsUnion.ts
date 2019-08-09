import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
export type RotateEncryptionKeyExceptionsUnion =
  | ClusterNotFoundFault
  | InvalidClusterStateFault
  | DependentServiceRequestThrottlingFault;
