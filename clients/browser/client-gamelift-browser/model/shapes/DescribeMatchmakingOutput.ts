import { _MatchmakingTicketList } from "./_MatchmakingTicketList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMatchmakingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TicketList: {
      shape: _MatchmakingTicketList
    }
  }
};
