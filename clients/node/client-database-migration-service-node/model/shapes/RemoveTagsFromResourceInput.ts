import { _KeyList } from "./_KeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagKeys"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _KeyList
    }
  }
};
