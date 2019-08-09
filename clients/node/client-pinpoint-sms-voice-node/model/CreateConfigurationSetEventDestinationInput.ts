import { _EventDestinationDefinition } from "./_EventDestinationDefinition";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigurationSetEventDestinationInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConfigurationSetName"
    },
    EventDestination: {
      shape: _EventDestinationDefinition
    },
    EventDestinationName: {
      shape: {
        type: "string"
      }
    }
  }
};
