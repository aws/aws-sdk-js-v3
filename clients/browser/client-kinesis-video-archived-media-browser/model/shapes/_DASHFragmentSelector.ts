import { _DASHTimestampRange } from "./_DASHTimestampRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DASHFragmentSelector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FragmentSelectorType: {
      shape: {
        type: "string"
      }
    },
    TimestampRange: {
      shape: _DASHTimestampRange
    }
  }
};
