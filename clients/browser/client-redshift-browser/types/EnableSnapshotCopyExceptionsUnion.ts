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
export type EnableSnapshotCopyExceptionsUnion =
  | IncompatibleOrderableOptions
  | InvalidClusterStateFault
  | ClusterNotFoundFault
  | CopyToRegionDisabledFault
  | SnapshotCopyAlreadyEnabledFault
  | UnknownSnapshotCopyRegionFault
  | UnauthorizedOperation
  | SnapshotCopyGrantNotFoundFault
  | LimitExceededFault
  | DependentServiceRequestThrottlingFault
  | InvalidRetentionPeriodFault;
