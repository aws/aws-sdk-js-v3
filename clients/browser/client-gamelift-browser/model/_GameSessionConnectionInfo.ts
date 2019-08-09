import { _MatchedPlayerSessionList } from "./_MatchedPlayerSessionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GameSessionConnectionInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IpAddress: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MatchedPlayerSessions: {
      shape: _MatchedPlayerSessionList
    }
  }
};
