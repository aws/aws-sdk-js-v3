import { CreateClusterInput } from "./CreateClusterInput";
import { CreateClusterOutput } from "./CreateClusterOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterInput
  },
  output: {
    shape: CreateClusterOutput,
    resultWrapper: "CreateClusterResult"
  },
  errors: [
    {
      shape: ClusterAlreadyExistsFault
    },
    {
      shape: InsufficientClusterCapacityFault
    },
    {
      shape: ClusterParameterGroupNotFoundFault
    },
    {
      shape: ClusterSecurityGroupNotFoundFault
    },
    {
      shape: ClusterQuotaExceededFault
    },
    {
      shape: NumberOfNodesQuotaExceededFault
    },
    {
      shape: NumberOfNodesPerClusterLimitExceededFault
    },
    {
      shape: ClusterSubnetGroupNotFoundFault
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
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
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
      shape: InvalidRetentionPeriodFault
    }
  ]
};
