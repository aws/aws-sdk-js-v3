import { _ResourceTagKeyList } from "./_ResourceTagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "tagKeys"],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tagKeys: {
      shape: _ResourceTagKeyList
    }
  }
};
