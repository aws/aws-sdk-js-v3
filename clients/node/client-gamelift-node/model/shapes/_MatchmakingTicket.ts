import { _PlayerList } from "./_PlayerList";
import { _GameSessionConnectionInfo } from "./_GameSessionConnectionInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MatchmakingTicket: _Structure_ = {
  type: "structure",
  required: [],
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
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusReason: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Players: {
      shape: _PlayerList
    },
    GameSessionConnectionInfo: {
      shape: _GameSessionConnectionInfo
    },
    EstimatedWaitTime: {
      shape: {
        type: "integer"
      }
    }
  }
};
