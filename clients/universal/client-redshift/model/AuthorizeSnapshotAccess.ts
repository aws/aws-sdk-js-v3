import { AuthorizeSnapshotAccessInput } from "./AuthorizeSnapshotAccessInput";
import { AuthorizeSnapshotAccessOutput } from "./AuthorizeSnapshotAccessOutput";
import { ClusterSnapshotNotFoundFault } from "./ClusterSnapshotNotFoundFault";
import { AuthorizationAlreadyExistsFault } from "./AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "./AuthorizationQuotaExceededFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { InvalidClusterSnapshotStateFault } from "./InvalidClusterSnapshotStateFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AuthorizeSnapshotAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeSnapshotAccess",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeSnapshotAccessInput
  },
  output: {
    shape: AuthorizeSnapshotAccessOutput,
    resultWrapper: "AuthorizeSnapshotAccessResult"
  },
  errors: [
    {
      shape: ClusterSnapshotNotFoundFault
    },
    {
      shape: AuthorizationAlreadyExistsFault
    },
    {
      shape: AuthorizationQuotaExceededFault
    },
    {
      shape: DependentServiceRequestThrottlingFault
    },
    {
      shape: InvalidClusterSnapshotStateFault
    },
    {
      shape: LimitExceededFault
    }
  ]
};
