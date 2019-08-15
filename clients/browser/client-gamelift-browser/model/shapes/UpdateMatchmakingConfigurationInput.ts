import { _QueueArnsList } from "./_QueueArnsList";
import { _GamePropertyList } from "./_GamePropertyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMatchmakingConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GameSessionQueueArns: {
      shape: _QueueArnsList
    },
    RequestTimeoutSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AcceptanceTimeoutSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AcceptanceRequired: {
      shape: {
        type: "boolean"
      }
    },
    RuleSetName: {
      shape: {
        type: "string"
      }
    },
    NotificationTarget: {
      shape: {
        type: "string"
      }
    },
    AdditionalPlayerCount: {
      shape: {
        type: "integer"
      }
    },
    CustomEventData: {
      shape: {
        type: "string"
      }
    },
    GameProperties: {
      shape: _GamePropertyList
    },
    GameSessionData: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BackfillMode: {
      shape: {
        type: "string"
      }
    }
  }
};
