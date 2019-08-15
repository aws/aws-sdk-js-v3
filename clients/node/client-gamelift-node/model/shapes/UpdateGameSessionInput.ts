import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGameSessionInput: _Structure_ = {
  type: "structure",
  required: ["GameSessionId"],
  members: {
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
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
    PlayerSessionCreationPolicy: {
      shape: {
        type: "string"
      }
    },
    ProtectionPolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
