import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceTag: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
