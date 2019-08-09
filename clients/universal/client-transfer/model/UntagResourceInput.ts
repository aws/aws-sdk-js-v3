import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "TagKeys"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    TagKeys: {
      shape: _TagKeys
    }
  }
};
