import { List as _List_ } from "@aws-sdk/types";
import { _GameSession } from "./_GameSession";

export const _GameSessionList: _List_ = {
  type: "list",
  member: {
    shape: _GameSession
  }
};
