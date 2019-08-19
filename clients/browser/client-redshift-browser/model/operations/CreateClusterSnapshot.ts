import { CreateClusterSnapshotInput } from "../shapes/CreateClusterSnapshotInput";
import { CreateClusterSnapshotOutput } from "../shapes/CreateClusterSnapshotOutput";
import { ClusterSnapshotAlreadyExistsFault } from "../shapes/ClusterSnapshotAlreadyExistsFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { ClusterSnapshotQuotaExceededFault } from "../shapes/ClusterSnapshotQuotaExceededFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
