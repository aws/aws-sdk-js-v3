import { _LifecycleHooks } from "./_LifecycleHooks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLifecycleHooksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LifecycleHooks: {
      shape: _LifecycleHooks
    }
  }
};
