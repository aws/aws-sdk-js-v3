import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Tags: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Items: {
      shape: _TagList
    }
  }
};
