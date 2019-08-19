import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type DescribeReplicationInstanceTaskLogsExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
