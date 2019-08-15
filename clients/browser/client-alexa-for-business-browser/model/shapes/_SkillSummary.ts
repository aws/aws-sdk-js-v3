import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SkillSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillId: {
      shape: {
        type: "string"
      }
    },
    SkillName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SupportsLinking: {
      shape: {
        type: "boolean"
      }
    },
    EnablementType: {
      shape: {
        type: "string"
      }
    },
    SkillType: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
