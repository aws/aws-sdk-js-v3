import { _AssessmentTemplateList } from "./_AssessmentTemplateList";
import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAssessmentTemplatesOutput: _Structure_ = {
  type: "structure",
  required: ["assessmentTemplates", "failedItems"],
  members: {
    assessmentTemplates: {
      shape: _AssessmentTemplateList
    },
    failedItems: {
      shape: _FailedItems
    }
  }
};
