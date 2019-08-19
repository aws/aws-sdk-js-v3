import { RestoreFromClusterSnapshotInput } from "../shapes/RestoreFromClusterSnapshotInput";
import { RestoreFromClusterSnapshotOutput } from "../shapes/RestoreFromClusterSnapshotOutput";
import { AccessToSnapshotDeniedFault } from "../shapes/AccessToSnapshotDeniedFault";
import { ClusterAlreadyExistsFault } from "../shapes/ClusterAlreadyExistsFault";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { ClusterQuotaExceededFault } from "../shapes/ClusterQuotaExceededFault";
import { InsufficientClusterCapacityFault } from "../shapes/InsufficientClusterCapacityFault";
import { InvalidClusterSnapshotStateFault } from "../shapes/InvalidClusterSnapshotStateFault";
import { InvalidRestoreFault } from "../shapes/InvalidRestoreFault";
import { NumberOfNodesQuotaExceededFault } from "../shapes/NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "../shapes/NumberOfNodesPerClusterLimitExceededFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidClusterSubnetGroupStateFault } from "../shapes/InvalidClusterSubnetGroupStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { ClusterSubnetGroupNotFoundFault } from "../shapes/ClusterSubnetGroupNotFoundFault";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { HsmClientCertificateNotFoundFault } from "../shapes/HsmClientCertificateNotFoundFault";
import { HsmConfigurationNotFoundFault } from "../shapes/HsmConfigurationNotFoundFault";
import { InvalidElasticIpFault } from "../shapes/InvalidElasticIpFault";
import { ClusterParameterGroupNotFoundFault } from "../shapes/ClusterParameterGroupNotFoundFault";
import { ClusterSecurityGroupNotFoundFault } from "../shapes/ClusterSecurityGroupNotFoundFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { InvalidClusterTrackFault } from "../shapes/InvalidClusterTrackFault";
import { SnapshotScheduleNotFoundFault } from "../shapes/SnapshotScheduleNotFoundFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
