import { ReservedNodeOfferingNotFoundFault } from "./ReservedNodeOfferingNotFoundFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { DependentServiceUnavailableFault } from "./DependentServiceUnavailableFault";
export type DescribeReservedNodeOfferingsExceptionsUnion =
  | ReservedNodeOfferingNotFoundFault
  | UnsupportedOperationFault
  | DependentServiceUnavailableFault;
