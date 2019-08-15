import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "Tags"],
  members: {
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
