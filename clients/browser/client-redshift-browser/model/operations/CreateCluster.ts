import { CreateClusterInput } from "../shapes/CreateClusterInput";
import { CreateClusterOutput } from "../shapes/CreateClusterOutput";
import { ClusterAlreadyExistsFault } from "../shapes/ClusterAlreadyExistsFault";
import { InsufficientClusterCapacityFault } from "../shapes/InsufficientClusterCapacityFault";
import { ClusterParameterGroupNotFoundFault } from "../shapes/ClusterParameterGroupNotFoundFault";
import { ClusterSecurityGroupNotFoundFault } from "../shapes/ClusterSecurityGroupNotFoundFault";
import { ClusterQuotaExceededFault } from "../shapes/ClusterQuotaExceededFault";
import { NumberOfNodesQuotaExceededFault } from "../shapes/NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "../shapes/NumberOfNodesPerClusterLimitExceededFault";
import { ClusterSubnetGroupNotFoundFault } from "../shapes/ClusterSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidClusterSubnetGroupStateFault } from "../shapes/InvalidClusterSubnetGroupStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { HsmClientCertificateNotFoundFault } from "../shapes/HsmClientCertificateNotFoundFault";
import { HsmConfigurationNotFoundFault } from "../shapes/HsmConfigurationNotFoundFault";
import { InvalidElasticIpFault } from "../shapes/InvalidElasticIpFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { InvalidClusterTrackFault } from "../shapes/InvalidClusterTrackFault";
import { SnapshotScheduleNotFoundFault } from "../shapes/SnapshotScheduleNotFoundFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
