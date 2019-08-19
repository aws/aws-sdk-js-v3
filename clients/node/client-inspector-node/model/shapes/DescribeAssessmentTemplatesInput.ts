import { _BatchDescribeArnList } from "./_BatchDescribeArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssessmentTemplatesInput: _Structure_ = {
  type: "structure",
  required: ["assessmentTemplateArns"],
  members: {
    assessmentTemplateArns: {
      shape: _BatchDescribeArnList
    }
  }
};
