import { EnableSnapshotCopyInput } from "../shapes/EnableSnapshotCopyInput";
import { EnableSnapshotCopyOutput } from "../shapes/EnableSnapshotCopyOutput";
import { IncompatibleOrderableOptions } from "../shapes/IncompatibleOrderableOptions";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { CopyToRegionDisabledFault } from "../shapes/CopyToRegionDisabledFault";
import { SnapshotCopyAlreadyEnabledFault } from "../shapes/SnapshotCopyAlreadyEnabledFault";
import { UnknownSnapshotCopyRegionFault } from "../shapes/UnknownSnapshotCopyRegionFault";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { SnapshotCopyGrantNotFoundFault } from "../shapes/SnapshotCopyGrantNotFoundFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { DependentServiceRequestThrottlingFault } from "../shapes/DependentServiceRequestThrottlingFault";
import { InvalidRetentionPeriodFault } from "../shapes/InvalidRetentionPeriodFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
