import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "Tags"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
