import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutConfigurationSetDeliveryOptionsInput: _Structure_ = {
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
    TlsPolicy: {
      shape: {
        type: "string"
      }
    },
    SendingPoolName: {
      shape: {
        type: "string"
      }
    }
  }
};
