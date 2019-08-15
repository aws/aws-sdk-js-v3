import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagLogGroupInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "tags"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
