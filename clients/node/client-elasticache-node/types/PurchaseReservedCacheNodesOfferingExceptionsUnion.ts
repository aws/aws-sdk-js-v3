import { ReservedCacheNodesOfferingNotFoundFault } from "./ReservedCacheNodesOfferingNotFoundFault";
import { ReservedCacheNodeAlreadyExistsFault } from "./ReservedCacheNodeAlreadyExistsFault";
import { ReservedCacheNodeQuotaExceededFault } from "./ReservedCacheNodeQuotaExceededFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
export type PurchaseReservedCacheNodesOfferingExceptionsUnion =
  | ReservedCacheNodesOfferingNotFoundFault
  | ReservedCacheNodeAlreadyExistsFault
  | ReservedCacheNodeQuotaExceededFault
  | InvalidParameterValueException
  | InvalidParameterCombinationException;
