import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RoomSkillParameter: _Structure_ = {
  type: "structure",
  required: ["ParameterKey", "ParameterValue"],
  members: {
    ParameterKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ParameterValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
