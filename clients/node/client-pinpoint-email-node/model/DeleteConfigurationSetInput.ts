import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConfigurationSetInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "ConfigurationSetName"
    }
  }
};
