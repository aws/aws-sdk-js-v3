import { List as _List_ } from "@aws-sdk/types";
import { _Player } from "./_Player";

export const _PlayerList: _List_ = {
  type: "list",
  member: {
    shape: _Player
  }
};
