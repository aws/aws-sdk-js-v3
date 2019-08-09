import { _PlayerList } from "./_PlayerList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartMatchBackfillInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationName", "GameSessionArn", "Players"],
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
    GameSessionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Players: {
      shape: _PlayerList
    }
  }
};
