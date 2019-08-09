import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDeliveryStreamInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName"],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
