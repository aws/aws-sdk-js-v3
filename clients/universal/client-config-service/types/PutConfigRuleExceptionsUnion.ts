import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MaxNumberOfConfigRulesExceededException } from "./MaxNumberOfConfigRulesExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
export type PutConfigRuleExceptionsUnion =
  | InvalidParameterValueException
  | MaxNumberOfConfigRulesExceededException
  | ResourceInUseException
  | InsufficientPermissionsException
  | NoAvailableConfigurationRecorderException;
