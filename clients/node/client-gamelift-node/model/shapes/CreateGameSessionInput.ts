import { _GamePropertyList } from "./_GamePropertyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGameSessionInput: _Structure_ = {
  type: "structure",
  required: ["MaximumPlayerSessionCount"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    AliasId: {
      shape: {
        type: "string"
      }
    },
    MaximumPlayerSessionCount: {
      shape: {
        type: "integer"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GameProperties: {
      shape: _GamePropertyList
    },
    CreatorId: {
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
    IdempotencyToken: {
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
    }
  }
};
