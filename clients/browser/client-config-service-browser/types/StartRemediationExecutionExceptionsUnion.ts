import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { NoSuchRemediationConfigurationException } from "./NoSuchRemediationConfigurationException";
export type StartRemediationExecutionExceptionsUnion =
  | InsufficientPermissionsException
  | NoSuchRemediationConfigurationException;
