import { List as _List_ } from "@aws-sdk/types";
import { _AssessmentRun } from "./_AssessmentRun";

export const _AssessmentRunList: _List_ = {
  type: "list",
  member: {
    shape: _AssessmentRun
  }
};
