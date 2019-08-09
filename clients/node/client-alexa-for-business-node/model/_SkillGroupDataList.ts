import { List as _List_ } from "@aws-sdk/types";
import { _SkillGroupData } from "./_SkillGroupData";

export const _SkillGroupDataList: _List_ = {
  type: "list",
  member: {
    shape: _SkillGroupData
  }
};
