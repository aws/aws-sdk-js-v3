import { CreateClusterSnapshotInput } from "./CreateClusterSnapshotInput";
import { CreateClusterSnapshotOutput } from "./CreateClusterSnapshotOutput";
import { ClusterSnapshotAlreadyExistsFault } from "./ClusterSnapshotAlreadyExistsFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ClusterSnapshotQuotaExceededFault } from "./ClusterSnapshotQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateClusterSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateClusterSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClusterSnapshotInput
  },
  output: {
    shape: CreateClusterSnapshotOutput,
    resultWrapper: "CreateClusterSnapshotResult"
  },
  errors: [
    {
      shape: ClusterSnapshotAlreadyExistsFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: ClusterSnapshotQuotaExceededFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    },
    {
      shape: InvalidRetentionPeriodFault
    }
  ]
};
