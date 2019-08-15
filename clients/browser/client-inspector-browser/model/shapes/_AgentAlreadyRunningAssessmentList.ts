import { List as _List_ } from "@aws-sdk/types";
import { _AgentAlreadyRunningAssessment } from "./_AgentAlreadyRunningAssessment";

export const _AgentAlreadyRunningAssessmentList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AgentAlreadyRunningAssessment
  }
};
