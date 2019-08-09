import { _GamePropertyList } from "./_GamePropertyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GameSession: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FleetId: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TerminationTime: {
      shape: {
        type: "timestamp"
      }
    },
    CurrentPlayerSessionCount: {
      shape: {
        type: "integer"
      }
    },
    MaximumPlayerSessionCount: {
      shape: {
        type: "integer"
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
    GameProperties: {
      shape: _GamePropertyList
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
    PlayerSessionCreationPolicy: {
      shape: {
        type: "string"
      }
    },
    CreatorId: {
      shape: {
        type: "string",
        min: 1
      }
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
