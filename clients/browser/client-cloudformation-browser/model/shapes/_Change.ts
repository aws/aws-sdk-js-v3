import { _ResourceChange } from "./_ResourceChange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Change: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    ResourceChange: {
      shape: _ResourceChange
    }
  }
};
