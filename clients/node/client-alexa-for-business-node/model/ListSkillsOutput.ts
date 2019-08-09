import { _SkillSummaryList } from "./_SkillSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSkillsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillSummaries: {
      shape: _SkillSummaryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
