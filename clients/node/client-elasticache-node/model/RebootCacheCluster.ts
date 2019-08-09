import { RebootCacheClusterInput } from "./RebootCacheClusterInput";
import { RebootCacheClusterOutput } from "./RebootCacheClusterOutput";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
