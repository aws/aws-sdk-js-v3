import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagResourceInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "Tags"],
  members: {
    Arn: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
