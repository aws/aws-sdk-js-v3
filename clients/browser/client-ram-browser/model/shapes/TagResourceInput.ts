import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceShareArn", "tags"],
  members: {
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
