import { _SkillGroup } from "./_SkillGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSkillGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillGroup: {
      shape: _SkillGroup
    }
  }
};
