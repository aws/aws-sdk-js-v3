import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsLogGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    tags: {
      shape: _Tags
    }
  }
};
