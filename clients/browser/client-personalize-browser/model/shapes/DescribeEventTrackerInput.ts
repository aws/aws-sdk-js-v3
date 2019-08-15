import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventTrackerInput: _Structure_ = {
  type: "structure",
  required: ["eventTrackerArn"],
  members: {
    eventTrackerArn: {
      shape: {
        type: "string"
      }
    }
  }
};
