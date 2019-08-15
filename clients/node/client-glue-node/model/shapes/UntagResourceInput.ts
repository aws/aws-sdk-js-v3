import { _TagKeysList } from "./_TagKeysList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "TagsToRemove"],
  members: {
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagsToRemove: {
      shape: _TagKeysList
    }
  }
};
