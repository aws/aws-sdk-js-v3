import { CreateSnapshotCopyGrantInput } from "./CreateSnapshotCopyGrantInput";
import { CreateSnapshotCopyGrantOutput } from "./CreateSnapshotCopyGrantOutput";
import { SnapshotCopyGrantAlreadyExistsFault } from "./SnapshotCopyGrantAlreadyExistsFault";
import { SnapshotCopyGrantQuotaExceededFault } from "./SnapshotCopyGrantQuotaExceededFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateSnapshotCopyGrant: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSnapshotCopyGrant",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSnapshotCopyGrantInput
  },
  output: {
    shape: CreateSnapshotCopyGrantOutput,
    resultWrapper: "CreateSnapshotCopyGrantResult"
  },
  errors: [
    {
      shape: SnapshotCopyGrantAlreadyExistsFault
    },
    {
      shape: SnapshotCopyGrantQuotaExceededFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: TagLimitExceededFault
    },
    {
      shape: InvalidTagFault
    },
    {
      shape: DependentServiceRequestThrottlingFault
    }
  ]
};
