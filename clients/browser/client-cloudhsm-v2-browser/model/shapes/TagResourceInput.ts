import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "TagList"],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    TagList: {
      shape: _TagList
    }
  }
};
