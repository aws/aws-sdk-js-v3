import { _TagValueList } from "./_TagValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _TagValueList
    }
  }
};
