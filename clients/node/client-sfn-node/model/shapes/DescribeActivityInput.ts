import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActivityInput: _Structure_ = {
  type: "structure",
  required: ["activityArn"],
  members: {
    activityArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
