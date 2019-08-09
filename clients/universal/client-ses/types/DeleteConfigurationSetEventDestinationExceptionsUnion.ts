import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { EventDestinationDoesNotExistException } from "./EventDestinationDoesNotExistException";
export type DeleteConfigurationSetEventDestinationExceptionsUnion =
  | ConfigurationSetDoesNotExistException
  | EventDestinationDoesNotExistException;
