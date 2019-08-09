import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type ReloadTablesExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
