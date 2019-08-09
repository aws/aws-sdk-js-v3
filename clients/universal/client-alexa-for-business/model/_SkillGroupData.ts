import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SkillGroupData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillGroupArn: {
      shape: {
        type: "string"
      }
    },
    SkillGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
