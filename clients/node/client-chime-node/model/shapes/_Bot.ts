import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Bot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BotId: {
      shape: {
        type: "string"
      }
    },
    UserId: {
      shape: {
        type: "string"
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    BotType: {
      shape: {
        type: "string"
      }
    },
    Disabled: {
      shape: {
        type: "boolean"
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    UpdatedTimestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    BotEmail: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    SecurityToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
