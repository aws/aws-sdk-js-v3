import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlayerSession: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlayerSessionId: {
      shape: {
        type: "string"
      }
    },
    PlayerId: {
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
    Status: {
      shape: {
        type: "string"
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
    PlayerData: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
