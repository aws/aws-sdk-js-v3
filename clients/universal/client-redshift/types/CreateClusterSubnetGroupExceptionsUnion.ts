import { ClusterSubnetGroupAlreadyExistsFault } from "./ClusterSubnetGroupAlreadyExistsFault";
import { ClusterSubnetGroupQuotaExceededFault } from "./ClusterSubnetGroupQuotaExceededFault";
import { ClusterSubnetQuotaExceededFault } from "./ClusterSubnetQuotaExceededFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
export type CreateClusterSubnetGroupExceptionsUnion =
  | ClusterSubnetGroupAlreadyExistsFault
  | ClusterSubnetGroupQuotaExceededFault
  | ClusterSubnetQuotaExceededFault
  | InvalidSubnet
  | UnauthorizedOperation
  | TagLimitExceededFault
  | InvalidTagFault
  | DependentServiceRequestThrottlingFault;
