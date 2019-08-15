import { _RoomSkillParameter } from "./_RoomSkillParameter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRoomSkillParameterInput: _Structure_ = {
  type: "structure",
  required: ["SkillId", "RoomSkillParameter"],
  members: {
    RoomArn: {
      shape: {
        type: "string"
      }
    },
    SkillId: {
      shape: {
        type: "string"
      }
    },
    RoomSkillParameter: {
      shape: _RoomSkillParameter
    }
  }
};
