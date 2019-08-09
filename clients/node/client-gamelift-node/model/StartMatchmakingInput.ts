import { _PlayerList } from "./_PlayerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartMatchmakingInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationName", "Players"],
  members: {
    TicketId: {
      shape: {
        type: "string"
      }
    },
    ConfigurationName: {
      shape: {
        type: "string"
      }
    },
    Players: {
      shape: _PlayerList
    }
  }
};
