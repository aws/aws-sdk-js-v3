import { RebootCacheClusterInput } from "../shapes/RebootCacheClusterInput";
import { RebootCacheClusterOutput } from "../shapes/RebootCacheClusterOutput";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RebootCacheCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RebootCacheCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RebootCacheClusterInput
  },
  output: {
    shape: RebootCacheClusterOutput,
    resultWrapper: "RebootCacheClusterResult"
  },
  errors: [
    {
      shape: InvalidCacheClusterStateFault
    },
    {
      shape: CacheClusterNotFoundFault
    }
  ]
};
