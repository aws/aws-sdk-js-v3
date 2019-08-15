import { List as _List_ } from "@aws-sdk/types";
import { _AssessmentRunStateChange } from "./_AssessmentRunStateChange";

export const _AssessmentRunStateChangeList: _List_ = {
  type: "list",
  member: {
    shape: _AssessmentRunStateChange
  }
};
