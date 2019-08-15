import { _ResourceArns } from "./_ResourceArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArns"],
  members: {
    ResourceArns: {
      shape: _ResourceArns
    }
  }
};
