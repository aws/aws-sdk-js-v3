import { ReservedNodeNotFoundFault } from "./ReservedNodeNotFoundFault";
import { InvalidReservedNodeStateFault } from "./InvalidReservedNodeStateFault";
import { ReservedNodeAlreadyMigratedFault } from "./ReservedNodeAlreadyMigratedFault";
import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "./DependentServiceUnavailableFault";
export type GetReservedNodeExchangeOfferingsExceptionsUnion =
  | ReservedNodeNotFoundFault
  | InvalidReservedNodeStateFault
  | ReservedNodeAlreadyMigratedFault
  | ReservedNodeOfferingNotFoundFault
  | UnsupportedOperationFault
  | DependentServiceUnavailableFault;
