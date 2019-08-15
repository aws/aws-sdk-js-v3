import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FirehoseAction: _Structure_ = {
  type: "structure",
  required: ["roleArn", "deliveryStreamName"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
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
