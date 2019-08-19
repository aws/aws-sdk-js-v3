import { List as _List_ } from "@aws-sdk/types";
import { _RoomSkillParameter } from "./_RoomSkillParameter";

export const _RoomSkillParameters: _List_ = {
  type: "list",
  member: {
    shape: _RoomSkillParameter
  }
};
