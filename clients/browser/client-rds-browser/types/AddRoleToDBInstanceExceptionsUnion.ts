import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBInstanceRoleAlreadyExistsFault } from "./DBInstanceRoleAlreadyExistsFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBInstanceRoleQuotaExceededFault } from "./DBInstanceRoleQuotaExceededFault";
export type AddRoleToDBInstanceExceptionsUnion =
  | DBInstanceNotFoundFault
  | DBInstanceRoleAlreadyExistsFault
  | InvalidDBInstanceStateFault
  | DBInstanceRoleQuotaExceededFault;
