import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRoomSkillParameterInput: _Structure_ = {
  type: "structure",
  required: ["SkillId", "ParameterKey"],
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
    ParameterKey: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
