import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tags"],
  members: {
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagsMap
    }
  }
};
