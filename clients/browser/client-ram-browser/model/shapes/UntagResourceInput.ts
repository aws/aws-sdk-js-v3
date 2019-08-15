import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceShareArn", "tagKeys"],
  members: {
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    tagKeys: {
      shape: _TagKeyList
    }
  }
};
