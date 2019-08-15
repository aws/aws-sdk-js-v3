import { List as _List_ } from "@aws-sdk/types";
import { _PlayerSession } from "./_PlayerSession";

export const _PlayerSessionList: _List_ = {
  type: "list",
  member: {
    shape: _PlayerSession
  }
};
