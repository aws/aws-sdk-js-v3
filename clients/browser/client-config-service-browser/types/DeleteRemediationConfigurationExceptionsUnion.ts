import { NoSuchRemediationConfigurationException } from "./NoSuchRemediationConfigurationException";
import { RemediationInProgressException } from "./RemediationInProgressException";
export type DeleteRemediationConfigurationExceptionsUnion =
  | NoSuchRemediationConfigurationException
  | RemediationInProgressException;
