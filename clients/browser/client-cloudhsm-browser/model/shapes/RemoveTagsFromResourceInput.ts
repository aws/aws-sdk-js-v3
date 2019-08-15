import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveTagsFromResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagKeyList"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    TagKeyList: {
      shape: _TagKeyList
    }
  }
};
