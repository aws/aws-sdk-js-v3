import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConfigurationSetEventDestinationInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName", "EventDestinationName"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    EventDestinationName: {
      shape: {
        type: "string"
      }
    }
  }
};
