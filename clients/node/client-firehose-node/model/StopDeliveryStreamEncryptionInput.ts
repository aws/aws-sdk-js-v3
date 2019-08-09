import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopDeliveryStreamEncryptionInput: _Structure_ = {
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
