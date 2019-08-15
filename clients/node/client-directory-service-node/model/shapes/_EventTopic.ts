import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventTopic: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    TopicName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    CreatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
