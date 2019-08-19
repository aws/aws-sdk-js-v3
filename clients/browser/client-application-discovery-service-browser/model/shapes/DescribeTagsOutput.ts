import { _ConfigurationTagSet } from "./_ConfigurationTagSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tags: {
      shape: _ConfigurationTagSet
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
