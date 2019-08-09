import { InvalidClusterSubnetGroupStateFault } from "./InvalidClusterSubnetGroupStateFault";
import { InvalidClusterSubnetStateFault } from "./InvalidClusterSubnetStateFault";
import { ClusterSubnetGroupNotFoundFault } from "./ClusterSubnetGroupNotFoundFault";
export type DeleteClusterSubnetGroupExceptionsUnion =
  | InvalidClusterSubnetGroupStateFault
  | InvalidClusterSubnetStateFault
  | ClusterSubnetGroupNotFoundFault;
