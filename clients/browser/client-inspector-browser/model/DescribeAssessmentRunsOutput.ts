import { _AssessmentRunList } from "./_AssessmentRunList";
import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssessmentRunsOutput: _Structure_ = {
  type: "structure",
  required: ["assessmentRuns", "failedItems"],
  members: {
    assessmentRuns: {
      shape: _AssessmentRunList
    },
    failedItems: {
      shape: _FailedItems
    }
  }
};
