import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResolveRoomInput: _Structure_ = {
  type: "structure",
  required: ["UserId", "SkillId"],
  members: {
    UserId: {
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
