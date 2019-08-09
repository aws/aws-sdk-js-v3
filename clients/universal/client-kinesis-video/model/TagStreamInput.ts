import { _ResourceTags } from "./_ResourceTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TagStreamInput: _Structure_ = {
  type: "structure",
  required: ["Tags"],
  members: {
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _ResourceTags
    }
  }
};
