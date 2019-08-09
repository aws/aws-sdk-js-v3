import { EnableSnapshotCopyInput } from "./EnableSnapshotCopyInput";
import { EnableSnapshotCopyOutput } from "./EnableSnapshotCopyOutput";
import { IncompatibleOrderableOptions } from "./IncompatibleOrderableOptions";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { CopyToRegionDisabledFault } from "./CopyToRegionDisabledFault";
import { SnapshotCopyAlreadyEnabledFault } from "./SnapshotCopyAlreadyEnabledFault";
import { UnknownSnapshotCopyRegionFault } from "./UnknownSnapshotCopyRegionFault";
import { UnauthorizedOperation } from "./UnauthorizedOperation";
import { SnapshotCopyGrantNotFoundFault } from "./SnapshotCopyGrantNotFoundFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "./DependentServiceRequestThrottlingFault";
import { InvalidRetentionPeriodFault } from "./InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableSnapshotCopy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableSnapshotCopy",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableSnapshotCopyInput
  },
  output: {
    shape: EnableSnapshotCopyOutput,
    resultWrapper: "EnableSnapshotCopyResult"
  },
  errors: [
    {
      shape: IncompatibleOrderableOptions
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: CopyToRegionDisabledFault
    },
    {
      shape: SnapshotCopyAlreadyEnabledFault
    },
    {
      shape: UnknownSnapshotCopyRegionFault
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: SnapshotCopyGrantNotFoundFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: DependentServiceRequestThrottlingFault
    },
    {
      shape: InvalidRetentionPeriodFault
    }
  ]
};
