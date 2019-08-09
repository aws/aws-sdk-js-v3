import { _MatchmakingIdList } from "./_MatchmakingIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMatchmakingInput: _Structure_ = {
  type: "structure",
  required: ["TicketIds"],
  members: {
    TicketIds: {
      shape: _MatchmakingIdList
    }
  }
};
