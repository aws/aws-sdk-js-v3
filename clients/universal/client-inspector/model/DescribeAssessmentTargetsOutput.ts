import { _AssessmentTargetList } from "./_AssessmentTargetList";
import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssessmentTargetsOutput: _Structure_ = {
  type: "structure",
  required: ["assessmentTargets", "failedItems"],
  members: {
    assessmentTargets: {
      shape: _AssessmentTargetList
    },
    failedItems: {
      shape: _FailedItems
    }
  }
};
