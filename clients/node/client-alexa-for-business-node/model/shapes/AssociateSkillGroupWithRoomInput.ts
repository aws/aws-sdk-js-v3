import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateSkillGroupWithRoomInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SkillGroupArn: {
      shape: {
        type: "string"
      }
    },
    RoomArn: {
      shape: {
        type: "string"
      }
    }
  }
};
