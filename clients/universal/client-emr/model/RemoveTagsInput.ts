import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "TagKeys"],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _StringList
    }
  }
};
