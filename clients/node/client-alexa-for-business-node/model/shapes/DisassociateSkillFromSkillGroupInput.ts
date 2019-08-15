import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateSkillFromSkillGroupInput: _Structure_ = {
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
