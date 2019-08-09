import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type DescribeTableStatisticsExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
