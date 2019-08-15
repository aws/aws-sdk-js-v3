import { _ResourceArnList } from "./_ResourceArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsInput: _Structure_ = {
  type: "structure",
  required: ["resourceArns"],
  members: {
    resourceArns: {
      shape: _ResourceArnList
    }
  }
};
