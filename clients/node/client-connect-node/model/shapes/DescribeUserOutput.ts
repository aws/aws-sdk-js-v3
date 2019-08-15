import { _User } from "./_User";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    User: {
      shape: _User
    }
  }
};
