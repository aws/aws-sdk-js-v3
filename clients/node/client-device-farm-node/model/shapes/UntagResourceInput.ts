import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARN", "TagKeys"],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 32
      }
    },
    TagKeys: {
      shape: _TagKeyList
    }
  }
};
