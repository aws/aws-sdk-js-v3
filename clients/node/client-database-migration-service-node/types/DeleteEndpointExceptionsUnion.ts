import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
export type DeleteEndpointExceptionsUnion =
  | ResourceNotFoundFault
  | InvalidResourceStateFault;
