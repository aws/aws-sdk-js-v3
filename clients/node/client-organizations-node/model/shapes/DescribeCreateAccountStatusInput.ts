import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCreateAccountStatusInput: _Structure_ = {
  type: "structure",
  required: ["CreateAccountRequestId"],
  members: {
    CreateAccountRequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
