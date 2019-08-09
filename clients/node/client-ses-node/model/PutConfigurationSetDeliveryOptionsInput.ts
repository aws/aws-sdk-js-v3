import { _DeliveryOptions } from "./_DeliveryOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutConfigurationSetDeliveryOptionsInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    DeliveryOptions: {
      shape: _DeliveryOptions
    }
  }
};
