import { RestoreFromClusterSnapshotInput } from "./RestoreFromClusterSnapshotInput";
import { RestoreFromClusterSnapshotOutput } from "./RestoreFromClusterSnapshotOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreFromClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreFromClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreFromClusterSnapshotInput
  },
  output: {
    shape: RestoreFromClusterSnapshotOutput,
    resultWrapper: "RestoreFromClusterSnapshotResult"
  },
  errors: [
    {
      shape: AccessToSnapshotDeniedFault
    },
    {
      shape: ClusterAlreadyExistsFault
    },
    {
      shape: ClusterSnapshotNotFoundFault
    },
    {
      shape: ClusterQuotaExceededFault
    },
    {
      shape: InsufficientClusterCapacityFault
    },
    {
      shape: InvalidClusterSnapshotStateFault
    },
    {
      shape: InvalidRestoreFault
    },
    {
      shape: NumberOfNodesQuotaExceededFault
    },
    {
      shape: NumberOfNodesPerClusterLimitExceededFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: InvalidClusterSubnetGroupStateFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: ClusterSubnetGroupNotFoundFault
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: HsmClientCertificateNotFoundFault
    },
    {
      shape: HsmConfigurationNotFoundFault
    },
    {
      shape: InvalidElasticIpFault
    },
    {
      shape: ClusterParameterGroupNotFoundFault
    },
    {
      shape: ClusterSecurityGroupNotFoundFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: DependentServiceRequestThrottlingFault
    },
    {
      shape: InvalidClusterTrackFault
    },
    {
      shape: SnapshotScheduleNotFoundFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    }
  ]
};
