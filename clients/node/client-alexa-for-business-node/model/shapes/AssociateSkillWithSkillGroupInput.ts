import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateSkillWithSkillGroupInput: _Structure_ = {
  type: "structure",
  required: ["SkillId"],
  members: {
    SkillGroupArn: {
      shape: {
        type: "string"
      }
    },
    SkillId: {
      shape: {
        type: "string"
      }
    }
  }
};
