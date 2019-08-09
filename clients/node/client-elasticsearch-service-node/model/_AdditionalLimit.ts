import { _LimitValueList } from "./_LimitValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AdditionalLimit: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LimitName: {
      shape: {
        type: "string"
      }
    },
    LimitValues: {
      shape: _LimitValueList
    }
  }
};
