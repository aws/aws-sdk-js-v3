import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN", "Tags"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 32
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
