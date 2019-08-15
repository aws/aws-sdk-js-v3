import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceName", "Tags"],
  members: {
    ResourceName: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
