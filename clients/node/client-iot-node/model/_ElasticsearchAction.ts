import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchAction: _Structure_ = {
  type: "structure",
  required: ["roleArn", "endpoint", "index", "type", "id"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    endpoint: {
      shape: {
        type: "string"
      }
    },
    index: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    id: {
      shape: {
        type: "string"
      }
    }
  }
};
