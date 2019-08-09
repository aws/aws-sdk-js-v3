import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { InvalidClusterSecurityGroupStateFault } from "./InvalidClusterSecurityGroupStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { NumberOfNodesQuotaExceededFault } from "./NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "./NumberOfNodesPerClusterLimitExceededFault";
import { ClusterSecurityGroupNotFoundFault } from "./ClusterSecurityGroupNotFoundFault";
import { ClusterParameterGroupNotFoundFault } from "./ClusterParameterGroupNotFoundFault";
import { InsufficientClusterCapacityFault } from "./InsufficientClusterCapacityFault";
import { UnsupportedOptionFault } from "./UnsupportedOptionFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { HsmClientCertificateNotFoundFault } from "./HsmClientCertificateNotFoundFault";
import { HsmConfigurationNotFoundFault } from "./HsmConfigurationNotFoundFault";
import { ClusterAlreadyExistsFault } from "./ClusterAlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { InvalidElasticIpFault } from "./InvalidElasticIpFault";
import { TableLimitExceededFault } from "./TableLimitExceededFault";
import { InvalidClusterTrackFault } from "./InvalidClusterTrackFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
export type ModifyClusterExceptionsUnion =
  | InvalidClusterStateFault
  | InvalidClusterSecurityGroupStateFault
  | ClusterNotFoundFault
  | NumberOfNodesQuotaExceededFault
  | NumberOfNodesPerClusterLimitExceededFault
  | ClusterSecurityGroupNotFoundFault
  | ClusterParameterGroupNotFoundFault
  | InsufficientClusterCapacityFault
  | UnsupportedOptionFault
  | UnauthorizedOperation
  | HsmClientCertificateNotFoundFault
  | HsmConfigurationNotFoundFault
  | ClusterAlreadyExistsFault
  | LimitExceededFault
  | DependentServiceRequestThrottlingFault
  | InvalidElasticIpFault
  | TableLimitExceededFault
  | InvalidClusterTrackFault
  | InvalidRetentionPeriodFault;
