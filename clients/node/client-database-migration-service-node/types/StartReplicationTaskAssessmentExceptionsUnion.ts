import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
export type StartReplicationTaskAssessmentExceptionsUnion =
  | InvalidResourceStateFault
  | ResourceNotFoundFault;
