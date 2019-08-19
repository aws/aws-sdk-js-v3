import { ModifySnapshotCopyRetentionPeriodInput } from "../shapes/ModifySnapshotCopyRetentionPeriodInput";
import { ModifySnapshotCopyRetentionPeriodOutput } from "../shapes/ModifySnapshotCopyRetentionPeriodOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { SnapshotCopyDisabledFault } from "../shapes/SnapshotCopyDisabledFault";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
