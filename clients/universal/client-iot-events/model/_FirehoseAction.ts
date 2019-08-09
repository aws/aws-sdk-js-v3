import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FirehoseAction: _Structure_ = {
  type: "structure",
  required: ["deliveryStreamName"],
  members: {
    deliveryStreamName: {
      shape: {
        type: "string"
      }
    },
    separator: {
      shape: {
        type: "string"
      }
    }
  }
};
