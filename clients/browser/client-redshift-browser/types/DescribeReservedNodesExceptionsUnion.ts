import { ReservedNodeNotFoundFault } from "./ReservedNodeNotFoundFault";
import { DependentServiceUnavailableFault } from "./DependentServiceUnavailableFault";
export type DescribeReservedNodesExceptionsUnion =
  | ReservedNodeNotFoundFault
  | DependentServiceUnavailableFault;
