import { List as _List_ } from "@aws-sdk/types";
import { _MissionProfileListItem } from "./_MissionProfileListItem";

export const _MissionProfileList: _List_ = {
  type: "list",
  member: {
    shape: _MissionProfileListItem
  }
};
