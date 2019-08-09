import { _ResourceARNList } from "./_ResourceARNList";
import { _TagKeyListForUntag } from "./_TagKeyListForUntag";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourcesInput: _Structure_ = {
  type: "structure",
  required: ["ResourceARNList", "TagKeys"],
  members: {
    ResourceARNList: {
      shape: _ResourceARNList
    },
    TagKeys: {
      shape: _TagKeyListForUntag
    }
  }
};
