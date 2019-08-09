import { DeleteReplicationGroupInput } from "./DeleteReplicationGroupInput";
import { DeleteReplicationGroupOutput } from "./DeleteReplicationGroupOutput";
import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { SnapshotFeatureNotSupportedFault } from "./SnapshotFeatureNotSupportedFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteReplicationGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteReplicationGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteReplicationGroupInput
  },
  output: {
    shape: DeleteReplicationGroupOutput,
    resultWrapper: "DeleteReplicationGroupResult"
  },
  errors: [
    {
      shape: ReplicationGroupNotFoundFault
    },
    {
      shape: InvalidReplicationGroupStateFault
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
