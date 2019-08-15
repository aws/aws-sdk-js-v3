import { List as _List_ } from "@aws-sdk/types";
import { _MatchmakingTicket } from "./_MatchmakingTicket";

export const _MatchmakingTicketList: _List_ = {
  type: "list",
  member: {
    shape: _MatchmakingTicket
  }
};
