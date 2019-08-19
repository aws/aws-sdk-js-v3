import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
export type DescribeSchemasExceptionsUnion =
  | InvalidResourceStateFault
  | ResourceNotFoundFault;
