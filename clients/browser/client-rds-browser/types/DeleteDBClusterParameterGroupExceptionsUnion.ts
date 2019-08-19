import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
export type DeleteDBClusterParameterGroupExceptionsUnion =
  | InvalidDBParameterGroupStateFault
  | DBParameterGroupNotFoundFault;
