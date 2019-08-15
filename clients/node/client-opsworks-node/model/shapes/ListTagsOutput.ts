import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tags: {
      shape: _Tags
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
