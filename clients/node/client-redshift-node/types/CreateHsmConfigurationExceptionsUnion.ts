import { HsmConfigurationAlreadyExistsFault } from "./HsmConfigurationAlreadyExistsFault";
import { HsmConfigurationQuotaExceededFault } from "./HsmConfigurationQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type CreateHsmConfigurationExceptionsUnion =
  | HsmConfigurationAlreadyExistsFault
  | HsmConfigurationQuotaExceededFault
  | TagLimitExceededFault
  | InvalidTagFault;
