import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromStreamInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "TagKeys"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagKeys: {
      shape: _TagKeyList
    }
  }
};
