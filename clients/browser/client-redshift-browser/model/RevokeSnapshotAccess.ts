import { RevokeSnapshotAccessInput } from "./RevokeSnapshotAccessInput";
import { RevokeSnapshotAccessOutput } from "./RevokeSnapshotAccessOutput";
import { AccessToSnapshotDeniedFault } from "./AccessToSnapshotDeniedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RevokeSnapshotAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeSnapshotAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeSnapshotAccessInput
  },
  output: {
    shape: RevokeSnapshotAccessOutput,
    resultWrapper: "RevokeSnapshotAccessResult"
  },
  errors: [
    {
      shape: AccessToSnapshotDeniedFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: ClusterSnapshotNotFoundFault
    }
  ]
};
