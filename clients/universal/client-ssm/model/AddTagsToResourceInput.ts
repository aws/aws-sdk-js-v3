import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddTagsToResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceType", "ResourceId", "Tags"],
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
    Tags: {
      shape: _TagList
    }
  }
};
