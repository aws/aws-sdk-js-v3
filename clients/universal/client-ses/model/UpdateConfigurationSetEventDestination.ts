import { UpdateConfigurationSetEventDestinationInput } from "./UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "./UpdateConfigurationSetEventDestinationOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { EventDestinationDoesNotExistException } from "./EventDestinationDoesNotExistException";
import { InvalidCloudWatchDestinationException } from "./InvalidCloudWatchDestinationException";
import { InvalidFirehoseDestinationException } from "./InvalidFirehoseDestinationException";
import { InvalidSNSDestinationException } from "./InvalidSNSDestinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfigurationSetEventDestination",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConfigurationSetEventDestinationInput
  },
  output: {
    shape: UpdateConfigurationSetEventDestinationOutput,
    resultWrapper: "UpdateConfigurationSetEventDestinationResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: EventDestinationDoesNotExistException
    },
    {
      shape: InvalidCloudWatchDestinationException
    },
    {
      shape: InvalidFirehoseDestinationException
    },
    {
      shape: InvalidSNSDestinationException
    }
  ]
};
