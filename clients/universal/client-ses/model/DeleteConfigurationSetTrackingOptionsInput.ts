import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConfigurationSetTrackingOptionsInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    }
  }
};
