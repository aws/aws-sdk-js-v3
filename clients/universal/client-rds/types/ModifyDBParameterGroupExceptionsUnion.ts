import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
export type ModifyDBParameterGroupExceptionsUnion =
  | DBParameterGroupNotFoundFault
  | InvalidDBParameterGroupStateFault;
