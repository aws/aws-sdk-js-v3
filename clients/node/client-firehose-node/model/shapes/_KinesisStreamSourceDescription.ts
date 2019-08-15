import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisStreamSourceDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KinesisStreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeliveryStartTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
