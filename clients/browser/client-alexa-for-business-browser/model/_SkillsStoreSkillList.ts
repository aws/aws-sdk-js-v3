import { List as _List_ } from "@aws-sdk/types";
import { _SkillsStoreSkill } from "./_SkillsStoreSkill";

export const _SkillsStoreSkillList: _List_ = {
  type: "list",
  member: {
    shape: _SkillsStoreSkill
  }
};
