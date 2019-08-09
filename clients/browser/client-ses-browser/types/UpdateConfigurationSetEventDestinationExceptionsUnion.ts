import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { EventDestinationDoesNotExistException } from "./EventDestinationDoesNotExistException";
import { InvalidCloudWatchDestinationException } from "./InvalidCloudWatchDestinationException";
import { InvalidFirehoseDestinationException } from "./InvalidFirehoseDestinationException";
import { InvalidSNSDestinationException } from "./InvalidSNSDestinationException";
export type UpdateConfigurationSetEventDestinationExceptionsUnion =
  | ConfigurationSetDoesNotExistException
  | EventDestinationDoesNotExistException
  | InvalidCloudWatchDestinationException
  | InvalidFirehoseDestinationException
  | InvalidSNSDestinationException;
