import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisFirehoseDestination: _Structure_ = {
  type: "structure",
  required: ["IAMRoleARN", "DeliveryStreamARN"],
  members: {
    IAMRoleARN: {
      shape: {
        type: "string"
      }
    },
    DeliveryStreamARN: {
      shape: {
        type: "string"
      }
    }
  }
};
