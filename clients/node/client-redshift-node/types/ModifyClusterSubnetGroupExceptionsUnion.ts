import { ClusterSubnetGroupNotFoundFault } from "./ClusterSubnetGroupNotFoundFault";
import { ClusterSubnetQuotaExceededFault } from "./ClusterSubnetQuotaExceededFault";
import { SubnetAlreadyInUse } from "./SubnetAlreadyInUse";
import { InvalidSubnet } from "./InvalidSubnet";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
export type ModifyClusterSubnetGroupExceptionsUnion =
  | ClusterSubnetGroupNotFoundFault
  | ClusterSubnetQuotaExceededFault
  | SubnetAlreadyInUse
  | InvalidSubnet
  | UnauthorizedOperation
  | DependentServiceRequestThrottlingFault;
