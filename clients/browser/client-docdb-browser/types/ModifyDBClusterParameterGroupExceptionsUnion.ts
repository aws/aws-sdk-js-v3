import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
export type ModifyDBClusterParameterGroupExceptionsUnion =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault;
