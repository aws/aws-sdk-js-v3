import { ModifyClusterInput } from "../shapes/ModifyClusterInput";
import { ModifyClusterOutput } from "../shapes/ModifyClusterOutput";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { InvalidClusterSecurityGroupStateFault } from "../shapes/InvalidClusterSecurityGroupStateFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { NumberOfNodesQuotaExceededFault } from "../shapes/NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "../shapes/NumberOfNodesPerClusterLimitExceededFault";
import { ClusterSecurityGroupNotFoundFault } from "../shapes/ClusterSecurityGroupNotFoundFault";
import { ClusterParameterGroupNotFoundFault } from "../shapes/ClusterParameterGroupNotFoundFault";
import { InsufficientClusterCapacityFault } from "../shapes/InsufficientClusterCapacityFault";
import { UnsupportedOptionFault } from "../shapes/UnsupportedOptionFault";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { HsmClientCertificateNotFoundFault } from "../shapes/HsmClientCertificateNotFoundFault";
import { HsmConfigurationNotFoundFault } from "../shapes/HsmConfigurationNotFoundFault";
import { ClusterAlreadyExistsFault } from "../shapes/ClusterAlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { InvalidElasticIpFault } from "../shapes/InvalidElasticIpFault";
import { TableLimitExceededFault } from "../shapes/TableLimitExceededFault";
import { InvalidClusterTrackFault } from "../shapes/InvalidClusterTrackFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterInput
  },
  output: {
    shape: ModifyClusterOutput,
    resultWrapper: "ModifyClusterResult"
  },
  errors: [
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: InvalidClusterSecurityGroupStateFault
    },
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: NumberOfNodesQuotaExceededFault
    },
    {
      shape: NumberOfNodesPerClusterLimitExceededFault
    },
    {
      shape: ClusterSecurityGroupNotFoundFault
    },
    {
      shape: ClusterParameterGroupNotFoundFault
    },
    {
      shape: InsufficientClusterCapacityFault
    },
    {
      shape: UnsupportedOptionFault
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
      shape: ClusterAlreadyExistsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: DependentServiceRequestThrottlingFault
    },
    {
      shape: InvalidElasticIpFault
    },
    {
      shape: TableLimitExceededFault
    },
    {
      shape: InvalidClusterTrackFault
    },
    {
      shape: InvalidRetentionPeriodFault
    }
  ]
};
