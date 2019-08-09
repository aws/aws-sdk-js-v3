import { _KeySchema } from "./_KeySchema";
import { _ShardDescriptionList } from "./_ShardDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamArn: {
      shape: {
        type: "string",
        min: 37
      }
    },
    StreamLabel: {
      shape: {
        type: "string"
      }
    },
    StreamStatus: {
      shape: {
        type: "string"
      }
    },
    StreamViewType: {
      shape: {
        type: "string"
      }
    },
    CreationRequestDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    KeySchema: {
      shape: _KeySchema
    },
    Shards: {
      shape: _ShardDescriptionList
    },
    LastEvaluatedShardId: {
      shape: {
        type: "string",
        min: 28
      }
    }
  }
};
