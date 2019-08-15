import { _BatchDescribeArnList } from "./_BatchDescribeArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssessmentTargetsInput: _Structure_ = {
  type: "structure",
  required: ["assessmentTargetArns"],
  members: {
    assessmentTargetArns: {
      shape: _BatchDescribeArnList
    }
  }
};
