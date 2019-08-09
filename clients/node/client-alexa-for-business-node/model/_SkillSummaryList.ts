import { List as _List_ } from "@aws-sdk/types";
import { _SkillSummary } from "./_SkillSummary";

export const _SkillSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _SkillSummary
  }
};
