import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeliveryStreamsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    DeliveryStreamType: {
      shape: {
        type: "string"
      }
    },
    ExclusiveStartDeliveryStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
