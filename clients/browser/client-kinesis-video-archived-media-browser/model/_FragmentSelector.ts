import { _TimestampRange } from "./_TimestampRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FragmentSelector: _Structure_ = {
  type: "structure",
  required: ["FragmentSelectorType", "TimestampRange"],
  members: {
    FragmentSelectorType: {
      shape: {
        type: "string"
      }
    },
    TimestampRange: {
      shape: _TimestampRange
    }
  }
};
