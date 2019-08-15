import { _TagKeyList } from "./_TagKeyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UntagStreamInput: _Structure_ = {
  type: "structure",
  required: ["TagKeyList"],
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
    TagKeyList: {
      shape: _TagKeyList
    }
  }
};
