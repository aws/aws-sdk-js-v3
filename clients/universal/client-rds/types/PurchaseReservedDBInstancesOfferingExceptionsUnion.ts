import { ReservedDBInstancesOfferingNotFoundFault } from "./ReservedDBInstancesOfferingNotFoundFault";
import { ReservedDBInstanceAlreadyExistsFault } from "./ReservedDBInstanceAlreadyExistsFault";
import { ReservedDBInstanceQuotaExceededFault } from "./ReservedDBInstanceQuotaExceededFault";
export type PurchaseReservedDBInstancesOfferingExceptionsUnion =
  | ReservedDBInstancesOfferingNotFoundFault
  | ReservedDBInstanceAlreadyExistsFault
  | ReservedDBInstanceQuotaExceededFault;
