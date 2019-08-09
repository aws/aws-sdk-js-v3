import { DisableSnapshotCopyInput } from "./DisableSnapshotCopyInput";
import { DisableSnapshotCopyOutput } from "./DisableSnapshotCopyOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { SnapshotCopyAlreadyDisabledFault } from "./SnapshotCopyAlreadyDisabledFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisableSnapshotCopy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableSnapshotCopy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableSnapshotCopyInput
  },
  output: {
    shape: DisableSnapshotCopyOutput,
    resultWrapper: "DisableSnapshotCopyResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: SnapshotCopyAlreadyDisabledFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: UnauthorizedOperation
    }
  ]
};
