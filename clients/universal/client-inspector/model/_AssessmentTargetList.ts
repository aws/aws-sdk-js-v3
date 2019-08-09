import { List as _List_ } from "@aws-sdk/types";
import { _AssessmentTarget } from "./_AssessmentTarget";

export const _AssessmentTargetList: _List_ = {
  type: "list",
  member: {
    shape: _AssessmentTarget
  }
};
