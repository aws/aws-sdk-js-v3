import { _HLSTimestampRange } from "./_HLSTimestampRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HLSFragmentSelector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FragmentSelectorType: {
      shape: {
        type: "string"
      }
    },
    TimestampRange: {
      shape: _HLSTimestampRange
    }
  }
};
