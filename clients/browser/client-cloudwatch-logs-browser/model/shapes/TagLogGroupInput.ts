import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagLogGroupInput: _Structure_ = {
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
      shape: _Tags
    }
  }
};
