import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { EventDestinationAlreadyExistsException } from "./EventDestinationAlreadyExistsException";
import { InvalidCloudWatchDestinationException } from "./InvalidCloudWatchDestinationException";
import { InvalidFirehoseDestinationException } from "./InvalidFirehoseDestinationException";
import { InvalidSNSDestinationException } from "./InvalidSNSDestinationException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateConfigurationSetEventDestinationExceptionsUnion =
  | ConfigurationSetDoesNotExistException
  | EventDestinationAlreadyExistsException
  | InvalidCloudWatchDestinationException
  | InvalidFirehoseDestinationException
  | InvalidSNSDestinationException
  | LimitExceededException;
