import { CreateSnapshotCopyGrantInput } from "../shapes/CreateSnapshotCopyGrantInput";
import { CreateSnapshotCopyGrantOutput } from "../shapes/CreateSnapshotCopyGrantOutput";
import { SnapshotCopyGrantAlreadyExistsFault } from "../shapes/SnapshotCopyGrantAlreadyExistsFault";
import { SnapshotCopyGrantQuotaExceededFault } from "../shapes/SnapshotCopyGrantQuotaExceededFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { TagLimitExceededFault } from "../shapes/TagLimitExceededFault";
import { InvalidTagFault } from "../shapes/InvalidTagFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
