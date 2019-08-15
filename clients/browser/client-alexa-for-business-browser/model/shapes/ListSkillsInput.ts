import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSkillsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillGroupArn: {
      shape: {
        type: "string"
      }
    },
    EnablementType: {
      shape: {
        type: "string"
      }
    },
    SkillType: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
