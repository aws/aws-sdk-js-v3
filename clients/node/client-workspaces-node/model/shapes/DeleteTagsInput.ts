import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTagsInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId", "TagKeys"],
  members: {
    ResourceId: {
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
