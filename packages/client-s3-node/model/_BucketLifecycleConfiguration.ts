import { _LifecycleRules } from "./_LifecycleRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BucketLifecycleConfiguration: _Structure_ = {
  type: "structure",
  required: ["Rules"],
  members: {
    Rules: {
      shape: _LifecycleRules,
      locationName: "Rule"
    }
  }
};
