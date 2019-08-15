import { _InvalidationList } from "./_InvalidationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInvalidationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InvalidationList: {
      shape: _InvalidationList
    }
  },
  payload: "InvalidationList"
};
