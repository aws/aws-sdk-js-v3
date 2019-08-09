import { _LifecyclePolicySummaryList } from "./_LifecyclePolicySummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLifecyclePoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Policies: {
      shape: _LifecyclePolicySummaryList
    }
  }
};
