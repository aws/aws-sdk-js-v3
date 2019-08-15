import { _StandardsSubscriptions } from "./_StandardsSubscriptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchEnableStandardsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StandardsSubscriptions: {
      shape: _StandardsSubscriptions
    }
  }
};
