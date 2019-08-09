import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
export type ResetDBParameterGroupExceptionsUnion =
  | InvalidDBParameterGroupStateFault
  | DBParameterGroupNotFoundFault;
