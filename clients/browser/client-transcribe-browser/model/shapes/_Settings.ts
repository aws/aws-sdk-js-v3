import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Settings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VocabularyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ShowSpeakerLabels: {
      shape: {
        type: "boolean"
      }
    },
    MaxSpeakerLabels: {
      shape: {
        type: "integer",
        min: 2
      }
    },
    ChannelIdentification: {
      shape: {
        type: "boolean"
      }
    }
  }
};
