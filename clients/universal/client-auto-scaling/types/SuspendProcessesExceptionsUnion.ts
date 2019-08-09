import { ResourceInUseFault } from "./ResourceInUseFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
export type SuspendProcessesExceptionsUnion =
  | ResourceInUseFault
  | ResourceContentionFault;
