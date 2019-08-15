import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApproveSkillInput: _Structure_ = {
  type: "structure",
  required: ["SkillId"],
  members: {
    SkillId: {
      shape: {
        type: "string"
      }
    }
  }
};
