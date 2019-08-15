import { _GamePropertyList } from "./_GamePropertyList";
import { _PlayerLatencyList } from "./_PlayerLatencyList";
import { _DesiredPlayerSessionList } from "./_DesiredPlayerSessionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartGameSessionPlacementInput: _Structure_ = {
  type: "structure",
  required: [
    "PlacementId",
    "GameSessionQueueName",
    "MaximumPlayerSessionCount"
  ],
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
    PlayerLatencies: {
      shape: _PlayerLatencyList
    },
    DesiredPlayerSessions: {
      shape: _DesiredPlayerSessionList
    },
    GameSessionData: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
