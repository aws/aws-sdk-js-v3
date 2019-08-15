import { _KeyList } from "./_KeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceType", "ResourceId", "TagKeys"],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _KeyList
    }
  }
};
