import { _GamePropertyList } from "./_GamePropertyList";
import { _PlayerLatencyList } from "./_PlayerLatencyList";
import { _PlacedPlayerSessionList } from "./_PlacedPlayerSessionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GameSessionPlacement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlacementId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GameSessionQueueName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    GameProperties: {
      shape: _GamePropertyList
    },
    MaximumPlayerSessionCount: {
      shape: {
        type: "integer"
      }
    },
    GameSessionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GameSessionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GameSessionRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlayerLatencies: {
      shape: _PlayerLatencyList
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
    PlacedPlayerSessions: {
      shape: _PlacedPlayerSessionList
    },
    GameSessionData: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MatchmakerData: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
