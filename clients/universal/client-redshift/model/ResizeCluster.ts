import { ResizeClusterInput } from "./ResizeClusterInput";
import { ResizeClusterOutput } from "./ResizeClusterOutput";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { NumberOfNodesQuotaExceededFault } from "./NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "./NumberOfNodesPerClusterLimitExceededFault";
import { InsufficientClusterCapacityFault } from "./InsufficientClusterCapacityFault";
import { UnsupportedOptionFault } from "./UnsupportedOptionFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResizeCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResizeCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResizeClusterInput
  },
  output: {
    shape: ResizeClusterOutput,
    resultWrapper: "ResizeClusterResult"
  },
  errors: [
    {
      shape: InvalidClusterStateFault
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
      shape: InsufficientClusterCapacityFault
    },
    {
      shape: UnsupportedOptionFault
    },
    {
      shape: UnsupportedOperationFault
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: LimitExceededFault
    }
  ]
};
