import { _SkillGroupDataList } from "./_SkillGroupDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchSkillGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillGroups: {
      shape: _SkillGroupDataList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TotalCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
