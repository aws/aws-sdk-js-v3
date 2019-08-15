import { DeleteReplicationGroupInput } from "../shapes/DeleteReplicationGroupInput";
import { DeleteReplicationGroupOutput } from "../shapes/DeleteReplicationGroupOutput";
import { ReplicationGroupNotFoundFault } from "../shapes/ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "../shapes/InvalidReplicationGroupStateFault";
import { SnapshotAlreadyExistsFault } from "../shapes/SnapshotAlreadyExistsFault";
import { SnapshotFeatureNotSupportedFault } from "../shapes/SnapshotFeatureNotSupportedFault";
import { SnapshotQuotaExceededFault } from "../shapes/SnapshotQuotaExceededFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
