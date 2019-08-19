import { _Rules } from "./_Rules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecycleConfiguration: _Structure_ = {
  type: "structure",
  required: ["Rules"],
  members: {
    Rules: {
      shape: _Rules,
      locationName: "Rule"
    }
  }
};
