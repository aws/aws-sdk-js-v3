import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { ReservedNodeAlreadyExistsFault } from "./ReservedNodeAlreadyExistsFault";
import { ReservedNodeQuotaExceededFault } from "./ReservedNodeQuotaExceededFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
export type PurchaseReservedNodeOfferingExceptionsUnion =
  | ReservedNodeOfferingNotFoundFault
  | ReservedNodeAlreadyExistsFault
  | ReservedNodeQuotaExceededFault
  | UnsupportedOperationFault;
