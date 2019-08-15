import { _JobSummary } from "./_JobSummary";
import { _Steps } from "./_Steps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Job: _Structure_ = {
  type: "structure",
  required: ["summary", "steps"],
  members: {
    summary: {
      shape: _JobSummary
    },
    steps: {
      shape: _Steps
    }
  }
};
