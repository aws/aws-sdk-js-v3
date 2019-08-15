import { DisableSnapshotCopyInput } from "../shapes/DisableSnapshotCopyInput";
import { DisableSnapshotCopyOutput } from "../shapes/DisableSnapshotCopyOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { SnapshotCopyAlreadyDisabledFault } from "../shapes/SnapshotCopyAlreadyDisabledFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
