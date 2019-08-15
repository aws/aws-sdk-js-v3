import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN", "TagKeys"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TagKeys: {
      shape: _TagKeys
    }
  }
};
