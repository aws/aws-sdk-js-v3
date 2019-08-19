import { HsmConfigurationNotFoundFault } from "./HsmConfigurationNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeHsmConfigurationsExceptionsUnion =
  | HsmConfigurationNotFoundFault
  | InvalidTagFault;
