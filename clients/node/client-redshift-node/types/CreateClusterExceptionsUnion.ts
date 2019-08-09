import { ClusterAlreadyExistsFault } from "./ClusterAlreadyExistsFault";
import { InsufficientClusterCapacityFault } from "./InsufficientClusterCapacityFault";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { ClusterQuotaExceededFault } from "./ClusterQuotaExceededFault";
import { NumberOfNodesQuotaExceededFault } from "./NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "./NumberOfNodesPerClusterLimitExceededFault";
import { ClusterSubnetGroupNotFoundFault } from "./ClusterSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidClusterSubnetGroupStateFault } from "./InvalidClusterSubnetGroupStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { HsmClientCertificateNotFoundFault } from "./HsmClientCertificateNotFoundFault";
import { HsmConfigurationNotFoundFault } from "./HsmConfigurationNotFoundFault";
import { InvalidElasticIpFault } from "./InvalidElasticIpFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { InvalidClusterTrackFault } from "./InvalidClusterTrackFault";
import { SnapshotScheduleNotFoundFault } from "./SnapshotScheduleNotFoundFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
export type CreateClusterExceptionsUnion =
  | ClusterAlreadyExistsFault
  | InsufficientClusterCapacityFault
  | ClusterParameterGroupNotFoundFault
  | ClusterSecurityGroupNotFoundFault
  | ClusterQuotaExceededFault
  | NumberOfNodesQuotaExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | ClusterSubnetGroupNotFoundFault
  | InvalidVPCNetworkStateFault
  | InvalidClusterSubnetGroupStateFault
  | InvalidSubnet
  | UnauthorizedOperation
  | HsmClientCertificateNotFoundFault
  | HsmConfigurationNotFoundFault
  | InvalidElasticIpFault
  | TagLimitExceededFault
  | InvalidTagFault
  | LimitExceededFault
  | DependentServiceRequestThrottlingFault
  | InvalidClusterTrackFault
  | SnapshotScheduleNotFoundFault
  | InvalidRetentionPeriodFault;
