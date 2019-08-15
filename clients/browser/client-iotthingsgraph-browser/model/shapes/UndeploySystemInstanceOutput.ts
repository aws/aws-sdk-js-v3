import { _SystemInstanceSummary } from "./_SystemInstanceSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UndeploySystemInstanceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    summary: {
      shape: _SystemInstanceSummary
    }
  }
};
