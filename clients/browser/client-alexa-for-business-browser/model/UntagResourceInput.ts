import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "TagKeys"],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeyList
    }
  }
};
