import { CreateConfigurationSetEventDestinationInput } from "./CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "./CreateConfigurationSetEventDestinationOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { EventDestinationAlreadyExistsException } from "./EventDestinationAlreadyExistsException";
import { InvalidCloudWatchDestinationException } from "./InvalidCloudWatchDestinationException";
import { InvalidFirehoseDestinationException } from "./InvalidFirehoseDestinationException";
import { InvalidSNSDestinationException } from "./InvalidSNSDestinationException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateConfigurationSetEventDestination",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateConfigurationSetEventDestinationInput
  },
  output: {
    shape: CreateConfigurationSetEventDestinationOutput,
    resultWrapper: "CreateConfigurationSetEventDestinationResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: EventDestinationAlreadyExistsException
    },
    {
      shape: InvalidCloudWatchDestinationException
    },
    {
      shape: InvalidFirehoseDestinationException
    },
    {
      shape: InvalidSNSDestinationException
    },
    {
      shape: LimitExceededException
    }
  ]
};
