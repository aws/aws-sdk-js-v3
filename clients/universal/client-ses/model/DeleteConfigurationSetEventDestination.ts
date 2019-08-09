import { DeleteConfigurationSetEventDestinationInput } from "./DeleteConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetEventDestinationOutput } from "./DeleteConfigurationSetEventDestinationOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { EventDestinationDoesNotExistException } from "./EventDestinationDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteConfigurationSetEventDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteConfigurationSetEventDestination",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteConfigurationSetEventDestinationInput
  },
  output: {
    shape: DeleteConfigurationSetEventDestinationOutput,
    resultWrapper: "DeleteConfigurationSetEventDestinationResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    },
    {
      shape: EventDestinationDoesNotExistException
    }
  ]
};
