import { SnapshotAlreadyExistsFault } from "./SnapshotAlreadyExistsFault";
import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { SnapshotQuotaExceededFault } from "./SnapshotQuotaExceededFault";
import { InvalidSnapshotStateFault } from "./InvalidSnapshotStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type CopySnapshotExceptionsUnion =
  | SnapshotAlreadyExistsFault
  | SnapshotNotFoundFault
  | SnapshotQuotaExceededFault
  | InvalidSnapshotStateFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
