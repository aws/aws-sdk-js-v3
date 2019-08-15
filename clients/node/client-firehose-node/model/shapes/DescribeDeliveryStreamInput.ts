import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeliveryStreamInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryStreamName"],
  members: {
    DeliveryStreamName: {
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
    },
    ExclusiveStartDestinationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
