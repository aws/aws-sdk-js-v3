import { List as _List_ } from "@aws-sdk/types";
import { _MatchedPlayerSession } from "./_MatchedPlayerSession";

export const _MatchedPlayerSessionList: _List_ = {
  type: "list",
  member: {
    shape: _MatchedPlayerSession
  }
};
