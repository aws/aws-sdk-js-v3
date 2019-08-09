import { List as _List_ } from "@aws-sdk/types";
import { _ConfigRuleEvaluationStatus } from "./_ConfigRuleEvaluationStatus";

export const _ConfigRuleEvaluationStatusList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigRuleEvaluationStatus
  }
};
