import { List as _List_ } from "@aws-sdk/types";
import { _PlacedPlayerSession } from "./_PlacedPlayerSession";

export const _PlacedPlayerSessionList: _List_ = {
  type: "list",
  member: {
    shape: _PlacedPlayerSession
  }
};
