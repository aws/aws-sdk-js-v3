import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisStreamSourceConfiguration: _Structure_ = {
  type: "structure",
  required: ["KinesisStreamARN", "RoleARN"],
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
    }
  }
};
