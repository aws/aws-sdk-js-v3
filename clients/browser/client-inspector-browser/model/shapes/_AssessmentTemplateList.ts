import { List as _List_ } from "@aws-sdk/types";
import { _AssessmentTemplate } from "./_AssessmentTemplate";

export const _AssessmentTemplateList: _List_ = {
  type: "list",
  member: {
    shape: _AssessmentTemplate
  }
};
