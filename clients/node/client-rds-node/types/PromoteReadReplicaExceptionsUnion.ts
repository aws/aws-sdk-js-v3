import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
export type PromoteReadReplicaExceptionsUnion =
  | InvalidDBInstanceStateFault
  | DBInstanceNotFoundFault;
