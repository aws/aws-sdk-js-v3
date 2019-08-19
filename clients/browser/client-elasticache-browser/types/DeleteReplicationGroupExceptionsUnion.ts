import { ReplicationGroupNotFoundFault } from "./ReplicationGroupNotFoundFault";
import { InvalidReplicationGroupStateFault } from "./InvalidReplicationGroupStateFault";
import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { SnapshotFeatureNotSupportedFault } from "./SnapshotFeatureNotSupportedFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DeleteReplicationGroupExceptionsUnion =
  | ReplicationGroupNotFoundFault
  | InvalidReplicationGroupStateFault
  | SnapshotAlreadyExistsFault
  | SnapshotFeatureNotSupportedFault
  | SnapshotQuotaExceededFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
