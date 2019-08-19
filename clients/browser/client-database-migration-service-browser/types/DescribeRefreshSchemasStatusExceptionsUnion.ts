import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
export type DescribeRefreshSchemasStatusExceptionsUnion =
  | InvalidResourceStateFault
  | ResourceNotFoundFault;
