import { _TagList } from "./_TagList";
import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    TagsToAdd: {
      shape: _TagList
    },
    TagsToRemove: {
      shape: _TagKeyList
    }
  }
};
