import { InvalidHsmConfigurationStateFault } from "./InvalidHsmConfigurationStateFault";
import { HsmConfigurationNotFoundFault } from "./HsmConfigurationNotFoundFault";
export type DeleteHsmConfigurationExceptionsUnion =
  | InvalidHsmConfigurationStateFault
  | HsmConfigurationNotFoundFault;
