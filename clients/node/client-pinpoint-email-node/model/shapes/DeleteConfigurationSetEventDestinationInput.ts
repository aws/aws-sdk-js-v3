import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConfigurationSetEventDestinationInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName", "EventDestinationName"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConfigurationSetName"
    },
    EventDestinationName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "EventDestinationName"
    }
  }
};
