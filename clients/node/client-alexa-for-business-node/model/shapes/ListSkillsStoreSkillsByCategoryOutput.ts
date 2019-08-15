import { _SkillsStoreSkillList } from "./_SkillsStoreSkillList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSkillsStoreSkillsByCategoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillsStoreSkills: {
      shape: _SkillsStoreSkillList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
