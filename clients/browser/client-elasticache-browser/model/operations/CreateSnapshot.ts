import { CreateSnapshotInput } from "../shapes/CreateSnapshotInput";
import { CreateSnapshotOutput } from "../shapes/CreateSnapshotOutput";
import { SnapshotAlreadyExistsFault } from "../shapes/SnapshotAlreadyExistsFault";
import { CacheClusterNotFoundFault } from "../shapes/CacheClusterNotFoundFault";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidCacheClusterStateFault } from "../shapes/InvalidCacheClusterStateFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { SnapshotFeatureNotSupportedFault } from "../shapes/SnapshotFeatureNotSupportedFault";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSnapshotInput
  },
  output: {
    shape: CreateSnapshotOutput,
    resultWrapper: "CreateSnapshotResult"
  },
  errors: [
    {
      shape: SnapshotAlreadyExistsFault
    },
    {
      shape: CacheClusterNotFoundFault
    },
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: InvalidCacheClusterStateFault
    },
    {
      shape: InvalidReplicationGroupStateFault
    },
    {
      shape: SnapshotQuotaExceededFault
    },
    {
      shape: SnapshotFeatureNotSupportedFault
    },
    {
      shape: InvalidParameterCombinationException
    },
    {
      shape: InvalidParameterValueException
    }
  ]
};
