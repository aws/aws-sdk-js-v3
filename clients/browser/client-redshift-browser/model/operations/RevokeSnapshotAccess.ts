import { RevokeSnapshotAccessInput } from "../shapes/RevokeSnapshotAccessInput";
import { RevokeSnapshotAccessOutput } from "../shapes/RevokeSnapshotAccessOutput";
import { AccessToSnapshotDeniedFault } from "../shapes/AccessToSnapshotDeniedFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
