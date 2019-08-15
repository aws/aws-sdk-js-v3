import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserProfileInput: _Structure_ = {
  type: "structure",
  required: ["userArn"],
  members: {
    userArn: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
