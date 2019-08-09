import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagsToAdd"],
  members: {
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagsToAdd: {
      shape: _TagsMap
    }
  }
};
