import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountInput: _Structure_ = {
  type: "structure",
  required: ["AccountId"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    }
  }
};
