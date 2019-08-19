import { AuthorizeSnapshotAccessInput } from "../shapes/AuthorizeSnapshotAccessInput";
import { AuthorizeSnapshotAccessOutput } from "../shapes/AuthorizeSnapshotAccessOutput";
import { ClusterSnapshotNotFoundFault } from "../shapes/ClusterSnapshotNotFoundFault";
import { AuthorizationAlreadyExistsFault } from "../shapes/AuthorizationAlreadyExistsFault";
import { AuthorizationQuotaExceededFault } from "../shapes/AuthorizationQuotaExceededFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { InvalidClusterSnapshotStateFault } from "../shapes/InvalidClusterSnapshotStateFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
