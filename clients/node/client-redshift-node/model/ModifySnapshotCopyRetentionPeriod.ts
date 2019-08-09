import { ModifySnapshotCopyRetentionPeriodInput } from "./ModifySnapshotCopyRetentionPeriodInput";
import { ModifySnapshotCopyRetentionPeriodOutput } from "./ModifySnapshotCopyRetentionPeriodOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { SnapshotCopyDisabledFault } from "./SnapshotCopyDisabledFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifySnapshotCopyRetentionPeriod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifySnapshotCopyRetentionPeriod",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifySnapshotCopyRetentionPeriodInput
  },
  output: {
    shape: ModifySnapshotCopyRetentionPeriodOutput,
    resultWrapper: "ModifySnapshotCopyRetentionPeriodResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: SnapshotCopyDisabledFault
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: InvalidRetentionPeriodFault
    }
  ]
};
