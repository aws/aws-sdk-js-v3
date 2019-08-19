import { _DescribedUser } from "./_DescribedUser";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUserOutput: _Structure_ = {
  type: "structure",
  required: ["ServerId", "User"],
  members: {
    ServerId: {
      shape: {
        type: "string"
      }
    },
    User: {
      shape: _DescribedUser
    }
  }
};
