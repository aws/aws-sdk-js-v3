import { CreateSnapshotInput } from "./CreateSnapshotInput";
import { CreateSnapshotOutput } from "./CreateSnapshotOutput";
import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { CacheClusterNotFoundFault } from "./CacheClusterNotFoundFault";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidCacheClusterStateFault } from "./InvalidCacheClusterStateFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { SnapshotFeatureNotSupportedFault } from "./SnapshotFeatureNotSupportedFault";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
