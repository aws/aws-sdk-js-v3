import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
export type GetClusterCredentialsExceptionsUnion =
  | ClusterNotFoundFault
  | UnsupportedOperationFault;
