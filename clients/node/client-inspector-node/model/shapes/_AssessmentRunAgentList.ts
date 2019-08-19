import { List as _List_ } from "@aws-sdk/types";
import { _AssessmentRunAgent } from "./_AssessmentRunAgent";

export const _AssessmentRunAgentList: _List_ = {
  type: "list",
  member: {
    shape: _AssessmentRunAgent
  }
};
