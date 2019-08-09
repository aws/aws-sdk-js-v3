import { ValidationException } from "./ValidationException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
export type ListDiscoveredResourcesExceptionsUnion =
  | ValidationException
  | InvalidLimitException
  | InvalidNextTokenException
  | NoAvailableConfigurationRecorderException;
