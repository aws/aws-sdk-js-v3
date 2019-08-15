import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BotAliasMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    botVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    botName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    lastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    checksum: {
      shape: {
        type: "string"
      }
    }
  }
};
