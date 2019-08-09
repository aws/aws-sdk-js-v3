import { DeleteCacheClusterInput } from "./DeleteCacheClusterInput";
import { DeleteCacheClusterOutput } from "./DeleteCacheClusterOutput";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { SnapshotFeatureNotSupportedFault } from "./SnapshotFeatureNotSupportedFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCacheCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCacheCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCacheClusterInput
  },
  output: {
    shape: DeleteCacheClusterOutput,
    resultWrapper: "DeleteCacheClusterResult"
  },
  errors: [
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: InvalidCacheClusterStateFault
    },
    {
      shape: SnapshotAlreadyExistsFault
    },
    {
      shape: SnapshotFeatureNotSupportedFault
    },
    {
      shape: SnapshotQuotaExceededFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
