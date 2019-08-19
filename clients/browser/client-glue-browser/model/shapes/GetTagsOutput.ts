import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTagsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tags: {
      shape: _TagsMap
    }
  }
};
