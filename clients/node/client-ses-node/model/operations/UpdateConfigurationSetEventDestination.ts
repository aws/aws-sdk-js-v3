import { UpdateConfigurationSetEventDestinationInput } from "../shapes/UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "../shapes/UpdateConfigurationSetEventDestinationOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { EventDestinationDoesNotExistException } from "../shapes/EventDestinationDoesNotExistException";
import { InvalidCloudWatchDestinationException } from "../shapes/InvalidCloudWatchDestinationException";
import { InvalidFirehoseDestinationException } from "../shapes/InvalidFirehoseDestinationException";
import { InvalidSNSDestinationException } from "../shapes/InvalidSNSDestinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
