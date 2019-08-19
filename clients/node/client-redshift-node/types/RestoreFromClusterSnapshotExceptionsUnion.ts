import { AccessToSnapshotDeniedFault } from "./AccessToSnapshotDeniedFault";
import { ClusterAlreadyExistsFault } from "./ClusterAlreadyExistsFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { ClusterQuotaExceededFault } from "./ClusterQuotaExceededFault";
import { InsufficientClusterCapacityFault } from "./InsufficientClusterCapacityFault";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { InvalidRestoreFault } from "./InvalidRestoreFault";
import { NumberOfNodesQuotaExceededFault } from "./NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "./NumberOfNodesPerClusterLimitExceededFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidClusterSubnetGroupStateFault } from "./InvalidClusterSubnetGroupStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { ClusterSubnetGroupNotFoundFault } from "./ClusterSubnetGroupNotFoundFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { HsmClientCertificateNotFoundFault } from "./HsmClientCertificateNotFoundFault";
import { HsmConfigurationNotFoundFault } from "./HsmConfigurationNotFoundFault";
import { InvalidElasticIpFault } from "./InvalidElasticIpFault";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { InvalidClusterTrackFault } from "./InvalidClusterTrackFault";
import { SnapshotScheduleNotFoundFault } from "./SnapshotScheduleNotFoundFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type RestoreFromClusterSnapshotExceptionsUnion =
  | AccessToSnapshotDeniedFault
  | ClusterAlreadyExistsFault
  | ClusterSnapshotNotFoundFault
  | ClusterQuotaExceededFault
  | InsufficientClusterCapacityFault
  | InvalidClusterSnapshotStateFault
  | InvalidRestoreFault
  | NumberOfNodesQuotaExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | InvalidVPCNetworkStateFault
  | InvalidClusterSubnetGroupStateFault
  | InvalidSubnet
  | ClusterSubnetGroupNotFoundFault
  | UnauthorizedOperation
  | HsmClientCertificateNotFoundFault
  | HsmConfigurationNotFoundFault
  | InvalidElasticIpFault
  | ClusterParameterGroupNotFoundFault
  | ClusterSecurityGroupNotFoundFault
  | LimitExceededFault
  | DependentServiceRequestThrottlingFault
  | InvalidClusterTrackFault
  | SnapshotScheduleNotFoundFault
  | TagLimitExceededFault
  | InvalidTagFault;
