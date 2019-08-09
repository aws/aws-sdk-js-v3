import { ValidationException } from "./ValidationException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
export type BatchGetResourceConfigExceptionsUnion =
  | ValidationException
  | NoAvailableConfigurationRecorderException;
