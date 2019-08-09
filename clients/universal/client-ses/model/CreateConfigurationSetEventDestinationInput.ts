import { _EventDestination } from "./_EventDestination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateConfigurationSetEventDestinationInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName", "EventDestination"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    EventDestination: {
      shape: _EventDestination
    }
  }
};
