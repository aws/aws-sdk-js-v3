import { ModifyClusterInput } from "./ModifyClusterInput";
import { ModifyClusterOutput } from "./ModifyClusterOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
