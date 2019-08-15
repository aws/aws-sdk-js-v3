import { DeleteCacheClusterInput } from "../shapes/DeleteCacheClusterInput";
import { DeleteCacheClusterOutput } from "../shapes/DeleteCacheClusterOutput";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { SnapshotAlreadyExistsFault } from "../shapes/SnapshotAlreadyExistsFault";
import { SnapshotFeatureNotSupportedFault } from "../shapes/SnapshotFeatureNotSupportedFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
