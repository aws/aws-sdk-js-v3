import { ResizeClusterInput } from "../shapes/ResizeClusterInput";
import { ResizeClusterOutput } from "../shapes/ResizeClusterOutput";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { NumberOfNodesQuotaExceededFault } from "../shapes/NumberOfNodesQuotaExceededFault";
import { NumberOfNodesPerClusterLimitExceededFault } from "../shapes/NumberOfNodesPerClusterLimitExceededFault";
import { InsufficientClusterCapacityFault } from "../shapes/InsufficientClusterCapacityFault";
import { UnsupportedOptionFault } from "../shapes/UnsupportedOptionFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
