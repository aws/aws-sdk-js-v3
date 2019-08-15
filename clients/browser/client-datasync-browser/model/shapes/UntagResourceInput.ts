import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "Keys"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    Keys: {
      shape: _TagKeyList
    }
  }
};
