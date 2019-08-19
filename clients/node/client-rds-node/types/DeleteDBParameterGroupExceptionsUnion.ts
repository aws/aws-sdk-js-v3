import { InvalidDBParameterGroupStateFault } from "./InvalidDBParameterGroupStateFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
export type DeleteDBParameterGroupExceptionsUnion =
  | InvalidDBParameterGroupStateFault
  | DBParameterGroupNotFoundFault;
