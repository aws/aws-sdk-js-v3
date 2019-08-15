import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
  members: {
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
