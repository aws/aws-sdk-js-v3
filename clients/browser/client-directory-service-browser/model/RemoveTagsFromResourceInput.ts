import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "TagKeys"],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeys
    }
  }
};
