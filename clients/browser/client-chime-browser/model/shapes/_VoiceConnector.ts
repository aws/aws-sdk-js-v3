import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VoiceConnector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VoiceConnectorId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OutboundHostName: {
      shape: {
        type: "string"
      }
    },
    RequireEncryption: {
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
    }
  }
};
