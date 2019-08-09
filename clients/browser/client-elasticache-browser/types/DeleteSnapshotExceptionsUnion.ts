import { SnapshotNotFoundFault } from "./SnapshotNotFoundFault";
import { InvalidSnapshotStateFault } from "./InvalidSnapshotStateFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type DeleteSnapshotExceptionsUnion =
  | SnapshotNotFoundFault
  | InvalidSnapshotStateFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
