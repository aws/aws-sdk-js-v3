import { _RoomSkillParameter } from "./_RoomSkillParameter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRoomSkillParameterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoomSkillParameter: {
      shape: _RoomSkillParameter
    }
  }
};
