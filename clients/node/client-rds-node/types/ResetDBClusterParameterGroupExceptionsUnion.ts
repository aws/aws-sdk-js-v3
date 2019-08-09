import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
export type ResetDBClusterParameterGroupExceptionsUnion =
  | InvalidDBParameterGroupStateFault
  | DBParameterGroupNotFoundFault;
