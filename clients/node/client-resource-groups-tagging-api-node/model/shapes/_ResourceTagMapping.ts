import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceTagMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
