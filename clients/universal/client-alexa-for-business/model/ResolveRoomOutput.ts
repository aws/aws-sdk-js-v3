import { _RoomSkillParameters } from "./_RoomSkillParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResolveRoomOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoomArn: {
      shape: {
        type: "string"
      }
    },
    RoomName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoomSkillParameters: {
      shape: _RoomSkillParameters
    }
  }
};
