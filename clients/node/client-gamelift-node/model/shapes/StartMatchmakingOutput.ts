import { _MatchmakingTicket } from "./_MatchmakingTicket";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartMatchmakingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MatchmakingTicket: {
      shape: _MatchmakingTicket
    }
  }
};
