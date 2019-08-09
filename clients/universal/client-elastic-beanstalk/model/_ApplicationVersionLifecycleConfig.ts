import { _MaxCountRule } from "./_MaxCountRule";
import { _MaxAgeRule } from "./_MaxAgeRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationVersionLifecycleConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxCountRule: {
      shape: _MaxCountRule
    },
    MaxAgeRule: {
      shape: _MaxAgeRule
    }
  }
};
