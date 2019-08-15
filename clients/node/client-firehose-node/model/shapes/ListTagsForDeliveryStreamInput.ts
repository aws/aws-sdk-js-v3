import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForDeliveryStreamInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName"],
  members: {
    DeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExclusiveStartTagKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
