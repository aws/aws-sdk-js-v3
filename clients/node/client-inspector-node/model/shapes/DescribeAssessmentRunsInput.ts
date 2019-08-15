import { _BatchDescribeArnList } from "./_BatchDescribeArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssessmentRunsInput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunArns"],
  members: {
    assessmentRunArns: {
      shape: _BatchDescribeArnList
    }
  }
};
