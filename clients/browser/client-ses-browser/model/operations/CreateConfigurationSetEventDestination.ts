import { CreateConfigurationSetEventDestinationInput } from "../shapes/CreateConfigurationSetEventDestinationInput";
import { CreateConfigurationSetEventDestinationOutput } from "../shapes/CreateConfigurationSetEventDestinationOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { EventDestinationAlreadyExistsException } from "../shapes/EventDestinationAlreadyExistsException";
import { InvalidCloudWatchDestinationException } from "../shapes/InvalidCloudWatchDestinationException";
import { InvalidFirehoseDestinationException } from "../shapes/InvalidFirehoseDestinationException";
import { InvalidSNSDestinationException } from "../shapes/InvalidSNSDestinationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
