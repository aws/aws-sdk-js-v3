import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeliveryChannelInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryChannelName"],
  members: {
    DeliveryChannelName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
