import { ConfigurationSetAlreadyExistsException } from "./ConfigurationSetAlreadyExistsException";
import { InvalidConfigurationSetException } from "./InvalidConfigurationSetException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateConfigurationSetExceptionsUnion =
  | ConfigurationSetAlreadyExistsException
  | InvalidConfigurationSetException
  | LimitExceededException;
