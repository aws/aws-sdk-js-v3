import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagOptionInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
