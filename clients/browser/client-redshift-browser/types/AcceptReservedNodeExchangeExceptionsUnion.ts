import { ReservedNodeNotFoundFault } from "./ReservedNodeNotFoundFault";
import { InvalidReservedNodeStateFault } from "./InvalidReservedNodeStateFault";
import { ReservedNodeAlreadyMigratedFault } from "./ReservedNodeAlreadyMigratedFault";
import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "./DependentServiceUnavailableFault";
import { ReservedNodeAlreadyExistsFault } from "./ReservedNodeAlreadyExistsFault";
export type AcceptReservedNodeExchangeExceptionsUnion =
  | ReservedNodeNotFoundFault
  | InvalidReservedNodeStateFault
  | ReservedNodeAlreadyMigratedFault
  | ReservedNodeOfferingNotFoundFault
  | UnsupportedOperationFault
  | DependentServiceUnavailableFault
  | ReservedNodeAlreadyExistsFault;
